import React from "react";
import "semantic/loader.css";

	 export default class Loader extends React.Component{
		state = {}
		render(){
			
			return <div  className="row">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
            </div>
        </div>
		}
	}