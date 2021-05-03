import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div className="ui container">
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;