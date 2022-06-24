import React, { Component } from "react";
import Card from "./Card";
class Classcomp extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Nature of Oman</h1>
          <img src="first.jpg" alt="load error"></img>
          <h2>
            Country :{this.props.name}
            <br></br>
            Location:{this.props.location}
            <br></br>
            Region:{this.props.region}
          </h2>
        </div>
        <Card name="Oman" location="Alkuwaire" region="Muscat"></Card>
      </React.Fragment>
    );
  }
}
export default Classcomp;
