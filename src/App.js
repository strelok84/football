import React, { Component } from 'react';
import Table from "./components/Table/Table"
import Teams from "./components/Teams/Teams"
import Matches from "./components/MathesOfTeam/Matches"
import MatchesOfLigue from "./components/MatchesOfLigue/MatchesOfLigue"
import { Route, Switch, Redirect } from 'react-router-dom';


class App extends Component {


  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/matchesOfLigue" component={MatchesOfLigue} />
          <Route path="/matchesOfLigue/:ligueId" component={MatchesOfLigue} />
          <Route path='/matches' component={Matches} />
          <Route path='/teams' component={Teams} />
          <Route exact path='/' component={Table} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;
