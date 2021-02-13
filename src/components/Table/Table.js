import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      data: [],
      id: 0,
      year: "",
      searchName: "",
    };
    this.searchBar = this.searchBar.bind(this);
    this.searchName = this.searchName.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.matchesOfLigue = this.matchesOfLigue.bind(this);
  }
  async componentDidMount(year) {
    const response = await fetch(
      `https://api.football-data.org/v2/competitions`,
      { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
    );
    const data = await response.json();
    console.log(data);
    this.setState({
      isLoading: false,
      data: data.competitions,
    });
  }

  handleClick(e, id) {
    console.log(id);
    e.preventDefault();
    localStorage.setItem("id", id)
    console.log(this.state.id);
    this.props.history.push({
      pathname: "/teams",
      state: { id: id },
    });
  }

  matchesOfLigue(e, ligueId) {
    e.preventDefault();

    localStorage.setItem("ligueId", ligueId)
    this.props.history.push({
      pathname: "/matchesOfLigue",
      state: { ligueId: ligueId },
    });
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
      <div className="container">
        <form className="form-inline mb-3 mt-3" onSubmit={this.searchBar}>
          <input
            className="form-control"
            type="search"
            onChange={this.searchName}
            placeholder="Название команды"
          />
          <input type="submit" className="btn btn-primary ml-3" value="Найти" />
        </form>
        <table className="table" id="table">
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
                      onClick={(e) => this.handleClick(e, item.id)}
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
                      onClick={(e) => this.matchesOfLigue(e, item.id)}
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
