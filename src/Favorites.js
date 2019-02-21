import React, { Component } from "react";
import BeyCard from "./BeyCard";


export default class Favorites extends Component {

  listFavoriteBeys = () => {
    return this.props.beyImages.map((img) => {
      console.log("img favorite attribute", img.favorite)
      if(img.favorite === true) {
        return <BeyCard key={img.id} bey={img} handleClick={this.props.handleClick}/> 
      }
    } )
  }


  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.listFavoriteBeys()}
      </div>
    );
  }
}
