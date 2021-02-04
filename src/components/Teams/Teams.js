import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

class Teams extends React.Component {
  state = {
    isLoading: true,
    data: [{ id: "Нет данных", name: "Нет данных", area: { name: "Нет данных" } }],
    year: 0,
  };

  async componentDidMount() {

    const response = await fetch(
      `http://api.football-data.org/v2/competitions/${this.props.location.state.id}/teams?season=2020`,
      { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
    )

    if (response.ok) {
      const data = await response.json()
      this.setState({
        isLoading: false,
        data: data.teams,
      })

      console.log(data.teams)
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

  render() {
    return (

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
                {this.state.data[0].id != "Нет данных" ?
                  (<a href="./teams" onClick={(e) => this.HandleClick(e, item.id)}>
                    Календарь команды
                  </a>) : "Нет данных"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    );
  }
}

export default Teams;
