import {Route, Switch } from 'react-router';
import * as React from 'react';
import Home from "./pages/Home";

class App extends React.Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/news" component={News} />
          <Route path="/profile" component={Profile} />
          <Route component={Notfound} />
      </Switch>
    );
  }
}

export default App;
