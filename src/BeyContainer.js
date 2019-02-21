import React from "react";
import BeyCard from "./BeyCard";

class BeyContainer extends React.Component {

  listBey = () => {
    return this.props.beyImages.map((img)=> {
      if(img.favorite === false)
      return <BeyCard key={img.id} bey={img} handleClick={this.props.handleClick}/> 
    })
  }

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.listBey()}
      </div>
    );
  }
}

export default BeyContainer;
