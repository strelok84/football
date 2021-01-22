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
            <th>ID</th>
            <th>Команда</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <a href="./teams">
                  {item.homeTeam.name}-{item.awayTeam.name}
                </a>
              </td>
              <td>{item.utcDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MatchesOfLigue;
