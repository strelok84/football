import React, { Component } from 'react';
import Loader from "./components/Loader/Loader.js"
import Table from "./components/Table/Table"
import Teams from "./components/Teams/Teams"
import Matches from "./components/MathesOfTeam/Matches"

import { Route, Switch, Redirect } from 'react-router-dom';

//const apiKey = "a3b3685ba5fd4c8685be0540c85652f2"
class App extends Component {

  /* state = {
    isLoading: true,
    data: [],
  }

  async componentDidMount() {
    const response = await fetch("https://api.football-data.org/v2/competitions", { headers: { 'X-Auth-Token': "a3b3685ba5fd4c8685be0540c85652f2" } })
    const data = await response.json()
    console.log(data)
    this.setState({
      isLoading: false,
      data: data.competitions
    })
  } */
  render() {
    return (
      <div className="container">
        <Switch>
          {<Route path='/matches' component={Matches} /> }
          <Route path='/teams' component={Teams} />
          <Route exact path='/' component={Table} />
          <Redirect to='/' />
        </Switch>

        {/* {
          this.state.isLoading
            ? <Loader />
            : <Table
              data={this.state.data}
            />
        } */}
      </div>
    );
  }
}

export default App;
