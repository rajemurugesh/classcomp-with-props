import React, { Component } from "react";
import Card4 from "./Card4";
class Card3 extends  Component{
    render(){
        return(
            <React.Fragment>
                <div>
                    <h1>Nature of Oman</h1>
                    <img src="five.jpg" alt="load error"></img>
                    <h1>Name:{this.props.name}<br></br>
                    Location:{this.props.location}<br></br>
                    Region:{this.props.region}</h1>
                </div>
                <Card4></Card4>
            </React.Fragment>
        );
    }
}
export default Card3;