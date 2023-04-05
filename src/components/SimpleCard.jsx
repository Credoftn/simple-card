import React, { Component } from "react";
import Img from "./Img";
import img2 from "../img2.jfif";
import Title from "./Title";
import Description from "./Description";
import "../SimpleCard.css";


class SimpleCard extends Component {
  
  render() {
    
    return (
      <div className="container">
        <div className="SimpleCard">
          <div className="img space">
            <Img img2={img2} />
          </div>
          <div className="titles ">
            <Title title="Chair with Golden Metal" />
          </div>
          <div className="description ">
            <Description
              description="Developers can call libraries to use components, classes, and methods to
              perform specific tasks. However, the framework already provides code to
              perform common tasks and uses code provided by the custom function
              developer."
              
            />
          </div>
          <div className="container_price">
            <h2 className="price">$120</h2>
            <div className="input_price">
              <input type="number"/>
            </div>
          </div>
          <button className="btn">Buy</button>
        </div>
      </div>
    );
  }
}

export default SimpleCard;
