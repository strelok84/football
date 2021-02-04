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
    }else{
      this.setState({
        data: [
          { id: "Нет данных", name: "Нет данных", area: { name: "Нет данных" } },
        ]
      })
    }
  }

  HandleClick(e, matchid) {
    console.log(matchid);
    e.preventDefault();
    this.setState({ matchid: matchid });
    console.log(this.state.matchid);
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
  render() {
    return (
      <div>
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
        <table className="table">
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
                      onClick={(e) => this.HandleClick(e, item.id)}
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
