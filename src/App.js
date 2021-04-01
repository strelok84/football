import React, { Component } from "react";
import Table from "./components/Table/Table";
import Teams from "./components/Teams/Teams";
import MatchesOfTeam from "./components/MathesOfTeam/MatchesOfTeam";
import MatchesOfLigue from "./components/MatchesOfLigue/MatchesOfLigue";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/matchesOfLigue" component={MatchesOfLigue} />
          <Route path="/matchesOfLigue/:ligueId" component={MatchesOfLigue} />
          <Route path="/matchesOfTeam/:matchid" component={MatchesOfTeam} />
          <Route path="/matchesOfTeam" component={MatchesOfTeam} />
          <Route path="/teams" component={Teams} />
          <Route exact path="/" component={Table} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
