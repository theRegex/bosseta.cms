import React from "react";
import { NavLink  } from 'react-router-dom';


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
				<li><NavLink className="navItem" activeClassName='selected' to="/products"><i className="fas fa-box"></i>Create Product</NavLink></li>
				 <li><NavLink className="navItem" activeClassName='selected' to="/categories"><i className="fas fa-grip-horizontal"></i>Create Category</NavLink></li>
				 <li><NavLink className="navItem" activeClassName='selected' to="/collections"><i className="fas fa-th-list"></i>Create Collection</NavLink></li>
				 <li><NavLink exact={true} className="navItem" activeClassName='selected' to="/"><i className="fas fa-clipboard-list"></i>Manage Products</NavLink></li>
				 <li><NavLink className="navItem" activeClassName='selected' to="/orders"><i className="fas fa-folder-open"></i>Manage Orders</NavLink></li>
				 <li><NavLink className="navItem" activeClassName='selected' to="/tracking"><i className="fas fa-truck-moving"></i>Track Order</NavLink></li>
				<li><NavLink className="navItem" activeClassName='selected' to="/settings"><i className="fas fa-cog"></i>Settings</NavLink></li>
			  </ul>
			</div>
		  </div>
		}
	}