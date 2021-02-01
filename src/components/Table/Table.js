import React from "react";

class Table extends React.Component {
  state = {
    isLoading: true,
    data: [],
    id: 0,
    year:""
  };

  async componentDidMount() {
    const response = await fetch(
      "https://api.football-data.org/v2/competitions",
      { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
    );
    const data = await response.json();
    console.log(data);
    this.setState({
      isLoading: false,
      data: data.competitions,
    });
  }

  HandleClick(e, id) {
    console.log(id);
    e.preventDefault();
    this.setState({ id: id });
    console.log(this.state.id);
    this.props.history.push({
      pathname: "/teams",
      state: { id: id },
    });
  }

  MatchesOfLigue(e, ligueId) {
    e.preventDefault();
    this.setState({ ligueId: ligueId });
    this.props.history.push({
      pathname: "/matchesOfLigue",
      state: { ligueId: ligueId },
    });
  }

  HandleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    let freeLigues = [
      2001,
      2017,
      2021,
      2003,
      2002,
      2015,
      2019,
      2014,
      2016,
      2013,
      2000,
      2018,
    ];
    let hidden = <td className="hiddenTd">Недоступно</td>;
    return (
      <div>
      <form>
        <label>Год
          <input type="text" value={this.state.year} onChange={this.HandleChange}></input>
        </label>
        <input type="submit" value="Отправить" />
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Название лиги</th>
            <th>Команды лиги</th>
            <th>Календарь лиги</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((item) => (
            <tr key={item.id}>
              {freeLigues.includes(item.id) ? <td>{item.name}</td> : hidden}
              {freeLigues.includes(item.id) ? (
                <td>
                  <a
                    href="./teams"
                    onClick={(e) => this.HandleClick(e, item.id)}
                  >
                    Команды лиги
                  </a>
                </td>
              ) : (
                hidden
              )}
              {freeLigues.includes(item.id) ? (
                <td>
                  <a
                    href="./matchesOfLigue"
                    onClick={(e) => this.MatchesOfLigue(e, item.id)}
                  >
                    Календарь лиги
                  </a>
                </td>
              ) : (
                hidden
              )}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
}

export default Table;
