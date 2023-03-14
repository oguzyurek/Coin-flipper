import React, { Component } from "react";
import "./App.css";
import Coin from "./Coin";

class Coinflip extends Component {
  static defaultProps = {
    head: "https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png",
    tail: "https://upload.wikimedia.org/wikipedia/commons/c/cd/1TL_reverse.png",
  };
  constructor(props) {
    super(props);
    this.state = { flippedToHead: 0, flippedToTail: 0, flipped: 0, face: true };
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this)}
handleClick() {
    let side = Math.floor(Math.random() * 2);
    if (side === 1) {
      this.setState({
        flippedToHead: this.state.flippedToHead + 1,
        face: false,
      });
    } else {
      this.setState({
        flippedToTail: this.state.flippedToTail + 1,
        face: true,
      });
    }
    this.setState({ flipped: this.state.flipped + 1 });
    console.log(`${side === 1 ? "head" : "tail"}`);
  }
  reset(){
    this.setState({flippedToHead:0, face: true, flippedToTail:0, flipped:0})}
render() {
    return (
      <div className="coinFlipper">
        <Coin side={this.state.face ? this.props.head : this.props.tail} />
        <div>
          <h3
            className={this.state.flippedToHead >= this.state.flippedToTail? "winner": "loser"}> 
            Head: {this.state.flippedToHead}
          </h3>
          <h3>vs </h3>
          <h3 className={this.state.flippedToHead <= this.state.flippedToTail ? "winner" : "loser"}>
            Tail: {this.state.flippedToTail}
          </h3>
        </div>
        <h4>Total Flips: {this.state.flipped}</h4>
        <button className="button-flip" onClick={this.handleClick}>Flip!</button>
        <button className="button-restart" onClick={this.reset}>Restart</button>
      </div>
    )}}
export default Coinflip;
