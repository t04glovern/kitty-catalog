import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Kitty Catalog</h1>
          <p>Serverless React App for fostering kitties</p>
        </div>
      </div>
    );
  }
}
