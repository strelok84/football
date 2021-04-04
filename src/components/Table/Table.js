import React from "react";
import Loader from "../Loader/Loader";
import {FREELIGUES} from "../../constants/const"

//главная страница - список всех лиг. На бесплатном аккаунте API доступны только 12 лиг, поэтому оставил только их.
/*Не очень понятно требование ТЗ иметь на этой странице поиск по году, т.к API запрос ко всем лигам + год не поддерживает
  Да и по смыслу это странно - список лиг, существовавших в определенный год? Так что поиск только по названию лиги.
*/

class Table extends React.Component {
  state = {
    isLoading: true,
    data: [],
    id: 0,
    year: "",
    searchName: "",
  };

  async componentDidMount(year) {
    const url = `https://fathomless-spire-81147.herokuapp.com/https://api.football-data.org/v2/competitions`;
    const response = await this.request(url);
    const data = await response.json();
    this.setState({
      isLoading: false,
      data: data.competitions,
    });
    sessionStorage.clear();
  }

  //Запрос к football-data.org списка всех лиг
  request = (url) => {
    return fetch(url, {
      headers: { "X-Auth-Token": "a3b3685ba5fd4c8685be0540c85652f2" },
    });
  };

  /*обработчик клика по строке "команды лиги", localstorage нужен ибо gh-pages криво работает с роутингом SPA (при обновлении страницы вываливаются в 404), 
  на нормальном хостинге это не нужно*/

  handleClick(event, id) {
    event.preventDefault();
    localStorage.setItem("id", id);
    this.props.history.push({
      pathname: "/teams",
      state: { id: id },
    });
  }

  // клик по строке "календарь лиги"

  matchesOfLigue(event, ligueId) {
    event.preventDefault();
    localStorage.setItem("ligueId", ligueId);
    this.props.history.push({
      pathname: "/matchesOfLigue",
      state: { ligueId: ligueId },
    });
  }

  //обработчик введенного пользователем значения названия лиги в строке поиска

  searchName = (event) => {
    this.setState((prevState) => ({
      searchName: event.target.value,
    }));
  };

  /*введенное пользователем имя лиги ищется в ячейках с названиями по регулярному выражению.
  Совпадения выделяются, экран прокручивается до выделенного значения*/

  searchBar = (event) => {
    event.preventDefault();
    const searchName = this.state.searchName;
    if (!searchName.match(/\S/)) {
      return alert("Введите название или часть названия");
    }
    const table = document.getElementById("table");
    const reg = new RegExp(searchName, "gi");
    let found = false;
    for (let i = 1; i < table.rows.length; i++) {
      if (reg.test(table.rows[i].cells[0].innerHTML)) {
        found = true;
        table.rows[i].cells[0].className += " foundCell";
        table.rows[i].scrollIntoView();
      } else {
        table.rows[i].cells[0].classList.remove("foundCell");
      }
    }
    if (!found) {
      alert("Такой лиги в списке нет. Введите название или часть названия.");
    }
  };

  render() {
    return (
      <div className="container">
        <form className="form-inline m-3" onSubmit={this.searchBar}>
          <input
            className="form-control"
            type="search"
            onChange={this.searchName}
            placeholder="Название команды"
          />
          <input type="submit" className="btn btn-primary m-3" value="Найти" />
        </form>
        {/*  Лоадер крутится пока подгружаются данные. Ф-ия берет данные формирует таблицу. Поля не из бесплатных id скрываются.
        В качестве key для map используется id лиги или команды.*/}
        {this.state.isLoading ? (
          <Loader />
        ) : (
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
                  {FREELIGUES.includes(item.id) ? (
                    <td>{item.name}</td>
                  ) : (
                    <td className="hiddenTd">Недоступно</td>
                  )}
                  {FREELIGUES.includes(item.id) ? (
                    <td>
                      <a
                        href="./teams"
                        onClick={(e) => this.handleClick(e, item.id)}
                      >
                        Команды лиги
                      </a>
                    </td>
                  ) : (
                    <td className="hiddenTd">Недоступно</td>
                  )}
                  {FREELIGUES.includes(item.id) ? (
                    <td>
                      <a
                        href="./matchesOfLigue"
                        onClick={(e) => this.matchesOfLigue(e, item.id)}
                      >
                        Календарь лиги
                      </a>
                    </td>
                  ) : (
                    <td className="hiddenTd">Недоступно</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
//Остальные компоненты устроены примерно аналогично
export default Table;
