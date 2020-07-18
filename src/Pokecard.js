import React, { Component } from "react";
import "./Pokecard.css";
const PokeApi =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

class Pokecard extends Component {
  render() {
    let imgSrc = `${PokeApi}${this.props.id}.png`;
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <img src={imgSrc} alt="" />
        <div>Type:{this.props.type}</div>
        <div>EXP:{this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;