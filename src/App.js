import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch("/getData")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            data: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
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
