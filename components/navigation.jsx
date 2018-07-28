import React from "react";
import { Link } from 'react-router-dom';


	 export default class Navigation extends React.Component{
		state = {}
		render(){
			return <div className="navigation_bar">
			<div className="navbarHeader">
				<h1 className="navbarTitle">Site Title</h1>
			  <br/>
			  <h5 className="navSectionTitle">
				 Navigation
			  </h5>
			  <ul className="navList">
				<li className="navItem"><i className="fas fa-box"></i><Link to="/products">Create Product</Link></li>
				 <li className="navItem"><i className="fas fa-grip-horizontal"></i><Link to="/categories">Create Category</Link></li>
				 <li className="navItem"><i className="fas fa-th-list"></i><Link to="/collections">Create Collection</Link></li>
				 <li className="navItem"><i className="fas fa-clipboard-list"></i><Link to="/">Manage Products</Link></li>
				 <li className="navItem"><i className="fas fa-folder-open"></i><Link to="/orders">Manage Orders</Link></li>
				 <li className="navItem"><i className="fas fa-truck-moving"></i><Link to="/tracking">Track Order</Link></li>
				<li className="navItem"><i className="fas fa-cog"></i><Link to="/settings">Settings</Link></li>
			  </ul>
			</div>
		  </div>
		}
	}