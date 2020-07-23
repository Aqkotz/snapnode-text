import React from "react";
import ReactDOM from "react-dom"
import Draggable from "react-draggable";

export default class Node extends React.Component{
    constructor(props){
        super()
        this.name = props.name;
    }
    render(){
        return(
            <Draggable>
                <div className="node-outer node">
                    <div className="c"></div>
                    <div className="node-inner node">
                        <h4 id="nodeTitle" className="nodeSection">{this.name}</h4>
                        <textarea className="nodeSection"/>
                    </div>
                </div>
            </Draggable>
        )
    }
}