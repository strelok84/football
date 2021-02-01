import React, { Component } from "react";

class MatchesOfLigue extends React.Component {
  state = {
    isLoading: true,
    data: [],
  };

  async componentDidMount() {
    const response = await fetch(
      "https://api.football-data.org/v2/competitions/2013/matches",
      { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
    );
    const data = await response.json();
    console.log(data);
    this.setState({
      isLoading: false,
      data: data.matches,
    });
  }

  render() {
    return (
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
    );
  }
}

export default MatchesOfLigue;
