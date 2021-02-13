import React from "react";

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      year: 0,
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.searchBar = this.searchBar.bind(this)
    this.searchName = this.searchName.bind(this)
  }

  async componentDidMount(year) {
    let id = localStorage.getItem("id") || this.props.location.state.id
    const response = await fetch(
      `http://api.football-data.org/v2/competitions/${id}/teams?season=${year ? year : 2020}`,
      { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
    );

    if (response.ok) {
      const data = await response.json();
      this.setState({
        isLoading: false,
        data: data.teams,
      })
    } else {
      this.setState({
        data: [
          {
            id: "Нет данных",
            name: "Нет данных",
            area: { name: "Нет данных" },
          },
        ],
      })
    }
  }

  handleClick(e, matchid) {
    e.preventDefault()
    localStorage.setItem("matchId", matchid)
    this.props.history.push({
      pathname: "/matches",
      state: { matchid: matchid },
    })
  }

  handleChange(event) {
    this.setState({ year: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.componentDidMount(this.state.year)
  }

  searchName(event) {
    this.setState({ searchName: event.target.value })
  }

  searchBar(event) {
    event.preventDefault();
    let table = document.getElementById("table")

    for (let i = 1; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        if (table.rows[i].cells[j].innerHTML === this.state.searchName) {
          table.rows[i].cells[j].style.fontWeight = "bold"
          table.rows[i].cells[j].style.backgroundColor = "grey"
          table.rows[i].scrollIntoView()
        } else {
          table.rows[i].cells[j].style.fontWeight = "normal"
          table.rows[i].cells[j].style.backgroundColor = "white"
        }
      }
    }


  }

  render() {
    return (
      <div className="container">

        <form onSubmit={this.searchBar}>
          <div className="form-group">
            <label>
              Название:
            <input className="form-control" type="search" onChange={this.searchName} placeholder="Название команды" />
            </label>
            <input className="btn btn-primary ml-3" type="submit" value="Найти" />
          </div>
        </form>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Год:
            <input
                className="form-control"
                type="number"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="2020"
              />
            </label>
            <input className="btn btn-primary ml-3" type="submit" value="Найти" />
          </div>
        </form>

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
                  {this.state.data[0].id != "Нет данных" ? (
                    <a
                      href="./teams"
                      onClick={(e) => this.handleClick(e, item.id)}
                    >
                      Календарь команды
                    </a>
                  ) : (
                      "Нет данных"
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Teams;
