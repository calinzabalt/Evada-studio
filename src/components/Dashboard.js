import React from 'react';
import ReactDOM from 'react-dom'; 
import axios from 'axios';
class Dashboard extends React.Component{
	constructor() {
    super();

    this.state = {
      entries: []
    };
  }
  componentDidMount() {
    axios.post('/dashboard', {})
        .then(
                response => this.setState({
                	entries:response.data
                })
            ).catch(
                error => console.log(error)
            )
  }
	render(){
	console.log(this.state.entries);
		return (
			<div>
        {this.state.entries.title}
        <p>Tot prostu se apuca de invatat React</p>
			</div>
		)
	}
}
export default Dashboard;
 