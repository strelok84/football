import React from "react";

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      year: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchBar = this.searchBar.bind(this);
    this.searchName = this.searchName.bind(this);
  }

  async componentDidMount(year) {
    const response = await fetch(
      `http://api.football-data.org/v2/competitions/${
        this.props.location.state.id
      }/teams?season=${year ? year : 2020}`,
      { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
    );

    if (response.ok) {
      const data = await response.json();
      this.setState({
        isLoading: false,
        data: data.teams,
      });
      console.log(data.teams);
    } else {
      this.setState({
        data: [
          {
            id: "Нет данных",
            name: "Нет данных",
            area: { name: "Нет данных" },
          },
        ],
      });
    }
  }

  handleClick(e, matchid) {
    e.preventDefault();
    this.setState({ matchid: matchid });
    this.props.history.push({
      pathname: "/matches",
      state: { matchid: matchid },
    });
  }

  handleChange(event) {
    this.setState({ year: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.componentDidMount(this.state.year);
  }

  searchName(event) {
    this.setState({ searchName: event.target.value });
  }

  searchBar(event) {
    event.preventDefault();
    let table = document.getElementById("table");
    //alert(table.rows[1].cells[0].innerHTML)
    for (let i = 1; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        if (table.rows[i].cells[j].innerHTML === this.state.searchName) {
          table.rows[i].cells[j].style.fontWeight = "bold";
          table.rows[i].cells[j].style.backgroundColor = "grey";
          table.rows[i].scrollIntoView();
        } else {
          table.rows[i].cells[j].style.fontWeight = "normal";
          table.rows[i].cells[j].style.backgroundColor = "white";
        }
      }
    }

    //alert(this.state.data[0].name)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchBar}>
          <input type="search" onChange={this.searchName} placeholder="Название команды"/>
          <input type="submit" value="Найти" />
        </form>

        <form onSubmit={this.handleSubmit}>
          <label>
            Год:
            <input
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="2020"
            />
          </label>
          <input type="submit" value="Отправить" />
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
