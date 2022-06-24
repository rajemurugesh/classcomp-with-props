import React, { Component } from "react";
import Card1 from "./Card1";
class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Nature of Oman</h1>
          <img src="second.jpg" alt="load err"></img>
          <h2>
            Country:{this.props.name}
            <br></br>
            Loaction:{this.props.location}
            <br></br>
            Region:{this.props.region}
          </h2>
        </div>
        <Card1 name="Oman" location="Ghala" region="Muscat"></Card1>
      </React.Fragment>
    );
  }
}
export default Card;
