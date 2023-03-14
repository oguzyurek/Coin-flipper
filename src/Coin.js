import React, { Component } from "react";

class Coin extends Component {
  render() {
    return (
      <div>
        <img src={this.props.side}></img>
      </div>
    );
  }
}

export default Coin;
