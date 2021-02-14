import React from "react"
import Loader from "../Loader/Loader"
import { withRouter } from "react-router-dom"

// Календарь лиги - список матчей лиги. По умолчанию показаны будущие матчи. 
//Есть поиск матчей за конкретный период. Введенные данные сохраняются в sessionStorage, при обновлении страницы соответственно результаты поиска не теряются


class MatchesOfLigue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: [],
      dateFrom: "",
      dateTo: ""
    }
    this.setDateFrom = this.setDateFrom.bind(this)
    this.setDateTo = this.setDateTo.bind(this)
    this.searchDate = this.searchDate.bind(this)
  }

  async componentDidMount() {

    let id = localStorage.getItem("ligueId") || this.props.location.state.ligueId
    let dateTo = sessionStorage.getItem("dateTo") || this.state.dateTo
    let dateFrom = sessionStorage.getItem("dateFrom") || this.state.dateFrom
    let response
    if (!dateFrom && !dateTo) {
      response = await fetch(
        `https://api.football-data.org/v2/competitions/${id}/matches?status=SCHEDULED`,
        { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
      );
    } else if ((!dateFrom && dateTo) || (dateFrom && !dateTo)) {
      alert("Нужно ввести обе даты")
      response = await fetch(
        `https://api.football-data.org/v2/competitions/${id}/matches?status=SCHEDULED`,
        { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
      );
    } else {
      response = await fetch(
        `https://api.football-data.org/v2/competitions/${id}/matches?dateTo=${dateTo}&dateFrom=${dateFrom}`,
        { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
      )
      window.history.pushState(null, null, "matchesOfLigue?" + dateFrom + "--" + dateTo)
    }


    const data = await response.json();

    this.setState({
      isLoading: false,
      data: data.matches,
    });
  }

  componentWillUnmount() {
    sessionStorage.clear()
  }

  setDateFrom(event) {
    this.setState({ dateFrom: event.target.value })
    sessionStorage.setItem("dateFrom", event.target.value)
  }
  setDateTo(event) {
    this.setState({ dateTo: event.target.value })
    sessionStorage.setItem("dateTo", event.target.value)
  }
  searchDate(event) {
    event.preventDefault()
    this.componentDidMount()
  }

  render() {

    return (
      <div className="container" >

        <form className="form-inline mt-3" onSubmit={this.searchDate}>
          <label>
            От:
            <input
              className="form-control ml-1"
              type="date"
              onChange={this.setDateFrom}
            />
          </label>
        </form>
        <form className="form-inline mt-2 mb-3" onSubmit={this.searchDate}>
          <label>
            До:
            <input
              className="form-control ml-1"
              type="date"
              onChange={this.setDateTo}
            />
            <input className="btn btn-primary m-3" type="submit" value="Найти" />
          </label>
        </form>
        {this.state.isLoading ? <Loader /> :
          <table className="table">
            <thead>
              <tr>
                <th>Команды</th>
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

export default withRouter(MatchesOfLigue)
