import React from "react";
import Loader from "../Loader/Loader";
import { withRouter } from "react-router-dom";

// Календарь лиги - список матчей лиги. По умолчанию показаны будущие матчи.
//Есть поиск матчей за конкретный период. Введенные данные сохраняются в sessionStorage, при обновлении страницы соответственно результаты поиска не теряются

class MatchesOfLigue extends React.Component {
  state = {
    isLoading: true,
    data: [],
    dateFrom: "",
    dateTo: "",
    name: "",
  };

  async componentDidMount() {
    const id =
      localStorage.getItem("ligueId") || this.props.location.state.ligueId;
    const dateTo = sessionStorage.getItem("dateTo") || this.state.dateTo;
    const dateFrom = sessionStorage.getItem("dateFrom") || this.state.dateFrom;
    let response;
    const url = `https://api.football-data.org/v2/competitions/${id}/matches?`;
    if (!dateFrom && !dateTo) {
      response = await this.request(`${url}status=SCHEDULED`);
    } else if ((!dateFrom && dateTo) || (dateFrom && !dateTo)) {
      alert("Нужно ввести обе даты");
      response = await this.request(`${url}status=SCHEDULED`);
    } else {
      response = await this.request(
        `${url}dateTo=${dateTo}&dateFrom=${dateFrom}`
      );

      window.history.pushState(
        null,
        null,
        "matchesOfLigue?" + dateFrom + "--" + dateTo
      );
    }

    const data = await response.json();
    console.log(data);
    this.setState({
      isLoading: false,
      data: data.matches,
      name: data.competition.name,
    });
  }

  componentWillUnmount = () => {
    sessionStorage.clear();
  };

  request = (url) => {
    return fetch(url, {
      headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" },
    });
  };

  setDateFrom = (event) => {
    this.setState({ dateFrom: event.target.value });
    sessionStorage.setItem("dateFrom", event.target.value);
  };
  setDateTo = (event) => {
    this.setState({ dateTo: event.target.value });
    sessionStorage.setItem("dateTo", event.target.value);
  };
  searchDate = (event) => {
    event.preventDefault();
    this.componentDidMount();
  };

  render() {
    return (
      <div className="container">
        <div className="mt-2 mb-2">
          <a className="mr-3" href="https://strelok84.github.io/football/">
            Главная страница
          </a>
          <span>{"\u00B7"}</span>
          <span className="ml-3">Календарь лиги</span>
        </div>
        <div className="grid">
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
            <input
              className="form-control btn btn-primary"
              type="submit"
              value="Найти"
            />
          </form>
          <div className="ligueName">
            <h1>{this.state.name}</h1>
          </div>
        </div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
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
        )}
      </div>
    );
  }
}

export default withRouter(MatchesOfLigue);
