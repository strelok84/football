import React, { Component } from "react";

class MatchesOfLigue extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: [],
      dateFrom:"",
      dateTo:""
    }
    this.setDateFrom = this.setDateFrom.bind(this)
    this.setDateTo = this.setDateTo.bind(this)
    this.searchDate = this.searchDate.bind(this)
  }
  async componentDidMount() {
    let response;
    if(!this.state.dateFrom && !this.state.dateTo){
      response = await fetch(
        `https://api.football-data.org/v2/competitions/${this.props.location.state.ligueId}/matches?status=SCHEDULED`,
        { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
      );
    }else if((!this.state.dateFrom && this.state.dateTo) || (this.state.dateFrom && !this.state.dateTo)){
      alert("Нужно ввести обе даты")
      response = await fetch(
        `https://api.football-data.org/v2/competitions/${this.props.location.state.ligueId}/matches?status=SCHEDULED`,
        { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
      );
    }else{
      response = await fetch(
        `https://api.football-data.org/v2/competitions/${this.props.location.state.ligueId}/matches?dateTo=${this.state.dateTo}&dateFrom=${this.state.dateFrom}`,
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
  setDateTo(event) { 
    this.setState({ dateTo: event.target.value })
  }
  searchDate(event) { 
    event.preventDefault()
    this.componentDidMount()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchDate}>
          <input
            type="date"
            onChange={this.setDateFrom}
          />

        </form>
        <form onSubmit={this.searchDate}>
          <input
            type="date"
            onChange={this.setDateTo}
          />
          <input type="submit" value="Найти" />
        </form>
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
      </div>
    );
  }
}

export default MatchesOfLigue;
