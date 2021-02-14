import React from "react"
import Loader from "../Loader/Loader"

//главная страница - список всех лиг. На бесплатном аккаунте API доступны только 12 лиг, поэтому оставил только их.
/*Не очень понятно требование ТЗ иметь на этой странице поиск по году, т.к API запрос ко всем лигам и год не поддерживает
  Да и по смыслу это странно - список лиг, существовавших в определенный год? Так что поиск только по названию лиги.
*/

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
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

  //Асинхронный запрос к football-data.org списка всех лиг

  async componentDidMount(year) {
    const response = await fetch(
      `https://api.football-data.org/v2/competitions`,
      { headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" } }
    )
    const data = await response.json();
    this.setState({
      isLoading: false,
      data: data.competitions,
    });
  }



  /*обработчик клика по строке "команды лиги", localstorage нужен ибо gh-pages криво работает с роутингом SPA (при обновлении страницы вываливаются в 404), 
  на нормальном хостинге это не нужно*/

  handleClick(e, id) {
    e.preventDefault();
    localStorage.setItem("id", id)
    this.props.history.push({
      pathname: "/teams",
      state: { id: id },
    });
  }

  // клик по строке "календарь лиги"

  matchesOfLigue(e, ligueId) {
    e.preventDefault();
    localStorage.setItem("ligueId", ligueId)

    this.props.history.push({
      pathname: "/matchesOfLigue",
      state: { ligueId: ligueId },
    });
  }

  //обработчик введенного пользователем значения названия лиги в строке поиска

  searchName(event) {
    this.setState({ searchName: event.target.value })

  }

  //введенное пользователем имя лиги ищется в таблице и выделяется, экран прокручивается до выделенного значения

  searchBar(event) {
    event.preventDefault();
    let table = document.getElementById("table");

    for (let i = 1; i < table.rows.length; i++) {
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        if (table.rows[i].cells[j].innerHTML === (this.state.searchName)) {
          table.rows[i].cells[j].style.fontWeight = "bold";
          table.rows[i].cells[j].style.backgroundColor = "#808080";
          table.rows[i].scrollIntoView();
        } else {
          table.rows[i].cells[j].style.fontWeight = "normal";
          table.rows[i].cells[j].style.backgroundColor = "#fff";
        }
      }
    }


  }

  render() {
    //id доступных лиг
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
        <form className="form-inline mb-3 mt-3" onSubmit={this.searchBar} >
          <input
            className="form-control"
            type="search"
            onChange={this.searchName}
            placeholder="Название команды"
          />
          <input type="submit" className="btn btn-primary ml-3" value="Найти" />
        </form>
        {/*  Лоадер крутится пока подгружаются данные. Ф-ия берет данные формирует таблицу. Поля не из бесплатных id скрываются */}
        {this.state.isLoading ? <Loader /> :
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
        }

      </div>
    )
  }
}
//Остальные компоненты устроены примерно аналогично
export default Table;
