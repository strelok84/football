import React from "react";
import Loader from "../Loader/Loader";

/*
Список команд лиги. По умолчанию показывается список на 2020 год. Можно вывести список за другой год (если год не поддерживается - выводит "нет данных"). 
Есть поиск названия команды в списке.
*/
class Teams extends React.Component {
  state = {
    isLoading: true,
    data: [],
    year: 2020,
    searchName: "",
    name: "",
  };

  async componentDidMount(year) {
    let id = localStorage.getItem("id") || this.props.location.state.id;
    let teamYear = sessionStorage.getItem("teamYear") || this.state.year;
    const url = `http://api.football-data.org/v2/competitions/${id}/teams?season=${
      +teamYear ? teamYear : 2020
    }`;
    const response = await this.request(url);

    if (+teamYear) {
      window.history.pushState(null, null, "teams?" + teamYear);
    }

    if (response.ok) {
      const data = await response.json();
      this.setState({
        isLoading: false,
        data: data.teams,
        name: data.competition.name,
      });
    } else {
      this.setState({
        isLoading: false,
        data: [
          {
            id: "Нет данных",
            name: `За ${this.state.year} год данных нет`,
            area: { name: "Если чемпионат не ежегодный - попробуйте год проведения" },
          },
        ],
      });
    }
  }

  componentWillUnmount() {
    sessionStorage.clear();
  }

  request = (url) => {
    return fetch(url, {
      headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" },
    });
  };

  // обработчик перехода на страницу календаря конкретной команды
  handleClick(e, matchid, teamName) {
    e.preventDefault();
    localStorage.setItem("matchId", matchid);
    localStorage.setItem("teamName", teamName);
    this.props.history.push({
      pathname: "/matchesOfTeam",
      state: { matchid: matchid, teamName:teamName },
    });
  }

  handleChange = (event) => {
    this.setState({ year: event.target.value });
    sessionStorage.setItem("teamYear", event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.componentDidMount(this.state.year);
  };

  searchName = (event) => {
    this.setState({ searchName: event.target.value });
  };

  searchBar = (event) => {
    event.preventDefault();
    const searchName = this.state.searchName;
    if (!searchName.match(/\S/)) {
      return alert("Введите название или часть названия");
    }
    const table = document.getElementById("table");
    let reg = new RegExp(searchName, "gi");
    let found = false;
    for (let i = 1; i < table.rows.length; i++) {
      if (reg.test(table.rows[i].cells[0].innerHTML)) {
        found = true;
        table.rows[i].cells[0].className += " foundCell";
        table.rows[i].scrollIntoView();
      } else {
        table.rows[i].cells[0].classList.remove("foundCell");
      }
    }
    if (!found) {
      alert("Такой лиги в списке нет. Введите название или часть названия.");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="mt-2 mb-2">
          <a className="mr-3" href="https://strelok84.github.io/football/">
            Главная страница
          </a>
          <span>{"\u00B7"}</span>
          <span className="ml-3">Команды лиги</span>
        </div>
        <div className="grid">
          <form onSubmit={this.searchBar} className="teamName">
            <div className="form-group">
              <label>
                Название:
                <input
                  className="form-control"
                  type="search"
                  onChange={this.searchName}
                  placeholder="Название команды"
                />
              </label>
              <input
                className="btn btn-primary ml-3"
                type="submit"
                value="Найти"
              />
            </div>
          </form>

          <form onSubmit={this.handleSubmit} className="teamYear">
            <div className="form-group">
              <label>
                Год:
                <input
                  className="form-control"
                  type="number"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder={sessionStorage.getItem("teamYear") || "2020"}
                />
              </label>
              <input
                className="btn btn-primary ml-3"
                type="submit"
                value="Найти"
              />
            </div>
          </form>
          <div className="ligueName">
            <h1>{this.state.name}</h1>
          </div>
        </div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <table className="table" id="table">
            <thead>
              <tr>
                <th>Команда</th>
                <th>Страна</th>
                <th>Календарь команды</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.area.name}</td>
                  <td>
                    {this.state.data[0].id !== "Нет данных" ? (
                      <a
                        href="./teams"
                        onClick={(e) => this.handleClick(e, item.id,item.name)}
                      >
                        Календарь команды
                      </a>
                    ) : (
                      "По ежегодным чемпионатам доступны данные за 750 дней"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default Teams;
