import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/*css*/
import './App.css';
/*components*/
import Header from "./components/header/Header";
import Toggle from "./components/toggle/Toggle";
import Sidebar from './components/sidebar/Sidebar';
/*pages*/
import dashboard from "./pages/dashboard/Dashboard";
import projects from "./pages/projects/Projects";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: true };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu = function() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <div id="app">
        <Router>
          <div className="header">
            <Header />
          </div>
          <div className="app_navigation">
              <div className="left_sidebar">
                <Toggle toggleMenu={this.toggleMenu}/>
                <Sidebar showMenu={this.state.showMenu}/>
              </div>
          </div>
          <div className="app_content">
            <Switch>
            <Route path="/dashboard" component={dashboard} />
            <Route path="/projects" component={projects} />
          </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
