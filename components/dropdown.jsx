import React from "react";
import "styles/style.create.categories.css";
import "styles/style.utils.css";

	 export default class DropDown extends React.Component{
		state = {}
		render(){

			let subList = null;

			if(this.props.items.length){
				subList = (<ul className="bss-dropdown-items">
					{
						this.props.items.map((subItem,index)=>{
							return <li key={index}>{ subItem }</li>
						})
					}
				</ul>)
			}
			return <div>
				<div className="bss-dropdown mT20">
					<div className="row">
					<div className="col-lg-8">
						<h3>{this.props.title}</h3>
					</div>
					<div className="col-lg-4 text-right">
						<div className="cat-del-link" onClick={this.props.onDelete}>
							Delete
						</div>
					</div>
					</div>
				</div>
				{ subList }
			</div>
		}
	}