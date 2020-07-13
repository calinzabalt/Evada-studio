import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/*css*/
import './App.css';
/*components*/
import Header from "./components/header/Header";
import Toggle from "./components/toggle/Toggle";
import SecondToggle from "./components/second_toggle/Secondtoggle";
import Sidebar from './components/sidebar/Sidebar';
import SecondSidebar from "./components/sidebar2/SecondSidebar";
/*pages*/
import dashboard from "./pages/dashboard/Dashboard";
import projects from "./pages/projects/Projects";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSidebar: true };
    this.state = { showMenu: true };
    this.toggleMenu = this.toggleMenu.bind(this);

    this.toggleSidebar = this.toggleSidebar.bind(this);
    
  }
  toggleMenu = function() {
    this.setState({ showMenu: !this.state.showMenu });
  }
  toggleSidebar = function() {
    this.setState({ showSidebar: !this.state.showSidebar });
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
          
            <div className="right_sidebar">
             <SecondToggle toggleSidebar={this.toggleSidebar}/> 
             <SecondSidebar showSidebar={this.state.showSidebar}/>
            </div>
            
          <Switch>
            <Route path="/dashboard" component={dashboard} />
            <Route path="/projects" component={projects} />
            <Route exact path="/sidebar" component={() =><SecondToggle onClick={this.props.toggleSidebar}/> }/>
          </Switch>
          </div>
          
          <div className="app_content">
            
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
