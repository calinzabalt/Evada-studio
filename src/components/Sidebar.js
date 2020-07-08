import React from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends React.Component{
	
	render(){
		return (
			<div className="ev_main_sidebar">
				<div className="logo"></div>
				<div className="main_top_links">
					
						<ul>
							<li> 
								<Link className={"nav-link"} to={"/dashboard"}>
									Dashboard
								</Link>
							</li>
							<li>
								<Link className={"nav-link"} to={"/projects"}>
									Projects
								</Link>
							</li>
						</ul>
					
				</div>
			</div>
		)
	}
}
export default Sidebar;