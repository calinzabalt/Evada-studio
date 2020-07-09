import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Projects from './pages/projects/Projects';
import Sidebar from './pages/sidebar/Sidebar';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
