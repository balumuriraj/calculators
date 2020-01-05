import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Math from './components/Math';
import Date from './components/Date';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/math" component={Math}></Route>
          <Route exact path="/date" component={Date}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
