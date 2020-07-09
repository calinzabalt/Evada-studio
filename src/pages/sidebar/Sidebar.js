import React from 'react';
import {Link} from 'react-router-dom';
import "./Sidebar.css"

class Sidebar extends React.Component{
	render(){
		return (
			<div className="ev_main_sidebar">
				<a href="/"><div className="logo"></div></a>
				<div className="main_top_links">
						<ul>
							<li>
								<div className="icon">
									<span></span>
								</div> 
								<Link className={"nav-link"} to={"/dashboard"}>
									Dashboard
								</Link>
							</li>
							<li>
								<Link className={"nav-link"} to={"/projects"}>
									Projects
								</Link>
							</li>
							<li>
								<Link className={"nav-link"} to={"/projects"}>
									Link One
								</Link>
							</li>
							<li>
								<Link className={"nav-link"} to={"/projects"}>
									Link Two
								</Link>
							</li>
							<li>
								<Link className={"nav-link"} to={"/projects"}>
									Link Three
								</Link>
							</li>
							<li>
								<Link className={"nav-link"} to={"/projects"}>
									Link Four
								</Link>
							</li>
						</ul>
						<div className="dropdown">
						<ul>
							<button className="dropbtn">Tools</button>
							<div className="dropdown_content">
							<li>
								<Link className={"nav-link"} to={"/projects"}>
									Projects
								</Link>
							</li>
							<li>
								<Link className={"nav-link"} to={"/projects"}>
									Link One
								</Link>
							</li>
							<li>
								<Link className={"nav-link"} to={"/projects"}>
									Link Two
								</Link>
							</li>
							<li>
								<Link className={"nav-link"} to={"/projects"}>
									Link Three
								</Link>
							</li>
							<li>
								<Link className={"nav-link"} to={"/projects"}>
									Link Four
								</Link>
							</li>
							</div>
						</ul>
						<div className="buttons">
							<button>EXAMPLE 1</button>
							<button>EXAMPLE 2</button>
							<button>EXAMPLE 3</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Sidebar;