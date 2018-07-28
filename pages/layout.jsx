import React from "react";
import Navigation from "components/navigation";
import Header from "components/header";

	 export default class Layout extends React.Component{
		state = {}
		render(){
			return ( <div className="main_wrap">
            <Navigation/>
            <div className="body_wrap">
                <Header/>
            <div className="page_content">
                {this.props.children}
            </div>
            </div>
            </div>
                )
		}
	}