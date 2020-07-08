import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/dashboard" component={Dashboard}>
              <Dashboard />
            </Route>
            <Route path="/projects" component={Projects}>
              <Projects />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
