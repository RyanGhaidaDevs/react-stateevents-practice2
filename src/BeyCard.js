import React, { Component } from "react";

class BeyCard extends React.Component {
  render() {
    console.log(this.props);
    const {name, img} = this.props.bey
    return (
      <div>
        <h3>{name}</h3>
        <img alt="" src={img} onClick={() => this.props.handleClick(this.props.bey)}/> 
      </div>
    );
  }
}

export default BeyCard;
