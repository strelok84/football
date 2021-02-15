import React from "react"
import Loader from "../Loader/Loader"
/*
Календарь конкретной команды. По умолчанию выводятся будущие матчи. 
Можно вывести матчи за конкретный период (если период недоступен - выводит соответствующую надпись).
Введенные данные сохраняются в sessionStorage, при обновлении страницы соответственно результаты поиска не теряются

Есть поиск по названию команды.
*/

class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      dateFrom: "",
      dateTo: "",
    };
    this.setDateFrom = this.setDateFrom.bind(this)
    this.setDateTo = this.setDateTo.bind(this)
    this.searchDate = this.searchDate.bind(this)
  }

  async componentDidMount() {
    let response
    let matchid = localStorage.getItem("matchId") || this.props.location.state.matchId
    let dateTo = sessionStorage.getItem("teamDateTo") || this.state.dateTo
    let dateFrom = sessionStorage.getItem("teamDateFrom") || this.state.dateFrom
    if (!dateFrom && !dateTo) {
      response = await fetch(
        `https://api.football-data.org/v2/teams/${matchid}/matches?status=SCHEDULED`,
        { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
      );
    } else if ((!dateFrom && dateTo) || (dateFrom && !dateTo)) {
      alert("Нужно ввести обе даты")
      response = await fetch(
        `https://api.football-data.org/v2/teams/${matchid}/matches?status=SCHEDULED`,
        { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
      );
    } else {
      response = await fetch(
        `https://api.football-data.org/v2/teams/${matchid}/matches?dateTo=${dateTo}&dateFrom=${dateFrom}`,
        { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
      )
      window.history.pushState(null, null, "matches?" + dateFrom + "--" + dateTo)
    }


    const data = await response.json()

    if (response.ok) {
      this.setState({
        isLoading: false,
        data: data.matches,
      })
    } else {
      this.setState({
        isLoading: false,
        data: [{ homeTeam: { name: "Нет данных в этом диапазоне" }, awayTeam: { name: "доступны данные только за последние 750 дней" }, id: "Нет данных", utcDate: Date.now() }],
      })
    }
  }

  componentWillUnmount() {
    sessionStorage.clear()
  }

  setDateFrom(event) {
    this.setState({ dateFrom: event.target.value })
    sessionStorage.setItem("teamDateFrom", event.target.value)
  }
  setDateTo(event) {
    this.setState({ dateTo: event.target.value })
    sessionStorage.setItem("teamDateTo", event.target.value)
  }

  searchDate(event) {
    event.preventDefault()
    this.componentDidMount()
  }

  render() {
    return (
      <div className="container">
        <div className="mt-2 mb-2" >
          <a className="mr-3" href="https://strelok84.github.io/football/">Главная страница</a>
          <span>{'\u00B7'}</span>
          <a href="https://strelok84.github.io/football/teams" className="ml-3 mr-3">Команды лиги</a>
          <span>{'\u00B7'}</span>
          <span className="ml-3">Календарь команды</span>
        </div>

        <form className="form-inline mt-3" onSubmit={this.searchDate}>
          <label>
            От:
           <input
              className="form-control ml-1 mr-3"
              type="date"
              onChange={this.setDateFrom}
            />
          </label>
        </form>
        <form className="form-inline mt-2 mb-3" onSubmit={this.searchDate}>
          <label>
            До:
          <input
              className="form-control ml-1 mr-3 "
              type="date"
              onChange={this.setDateTo}
            />
          </label>
          <input className="form-control btn btn-primary" type="submit" value="Найти" />
        </form>

        {this.state.isLoading ? <Loader /> :
          <table className="table">
            <thead>
              <tr>
                <th>Матч</th>
                <th>
                  Дата матча по времени{" "}
                  {Intl.DateTimeFormat().resolvedOptions().timeZone}
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item) => (
                <tr key={item.id}>
                  <td>
                    {item.homeTeam.name} - {item.awayTeam.name}
                  </td>
                  <td>{new Date(item.utcDate).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        }

      </div>
    );
  }
}

export default Matches;
