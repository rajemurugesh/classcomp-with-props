import React, { Component } from "react";
import Card2 from "./Card2";
class Card1 extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Nature of Oman</h1>
          <img src="third.jpg" alt="load error"></img>
          <h2>
            Country:{this.props.name}
            <br></br>
            Location:{this.props.location}
            <br></br>
            Region:{this.props.region}
          </h2>
        </div>
        <Card2 name="Oman" location="Banglore" region="Karnadaka"></Card2>
      </React.Fragment>
    );
  }
}
export default Card1;
