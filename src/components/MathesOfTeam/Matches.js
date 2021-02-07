import React from "react";

class Matches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      dateFrom: "",
      dateTo: "",
    };
    this.setDateFrom=this.setDateFrom.bind(this)
    this.setDateTo=this.setDateTo.bind(this)
  }

  async componentDidMount() {
    let response
    if (this.state.dateFrom === "" && this.state.dateTo === "") {
      response = await fetch(
        `https://api.football-data.org/v2/teams/${this.props.location.state.matchid}/matches?dateTo/dateFrom=2021-01-01/2021-06-22
        `,
        { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
      );
    }
    const data = await response.json();
    console.log(data);
    this.setState({
      isLoading: false,
      data: data.matches,
    });
  }

  setDateFrom(event) {
    this.setState({ dateFrom: event.target.value })
  }
  setDateTo(event){
    this.setState({ dateTo: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.dateFrom2}>
          <input
            type="date"
            onChange={this.setDateFrom}
            
          />
          <input type="submit" value="Найти" />
        </form>
        <form onSubmit={this.dateFrom2}>
          <input
            type="date"
            onChange={this.setDateTo}
            
          />
          <input type="submit" value="Найти" />
        </form>
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
      </div>
    );
  }
}

export default Matches;
