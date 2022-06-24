import React, { Component } from "react";
import Card3 from "./Card3";
class Card2 extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Nature of Oman</h1>
          <img src="fourth.jpg" alt="load error"></img>
          <h2>
            Name:{this.props.name}
            <br></br>
            Location:{this.props.location}
            <br></br>
            Region:{this.props.region}
          </h2>
        </div>
        <Card3 name="Oman" location="Sohar" region="North"></Card3>
      </React.Fragment>
    );
  }
}
export default Card2;
