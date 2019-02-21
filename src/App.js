import React, { Component } from "react";
import "./App.css";
import BeyContainer from "./BeyContainer";
import Favorites from "./Favorites";
import beyImages from "./beyImages";


class App extends Component {

  state = {
    beyImages: beyImages
  };

  handleClick = (obj) => {
    //1.) make clone of state obj 
    let NewBeyImages = [...this.state.beyImages]; //clone of array at the key beyImages 
        //--> creates brand new space in memory for array
          //--> pass by reference 
    //2.) Find the equivelant obj in NewBeyImages 
        //--> The find() method returns the value of 
        // the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
    let SelectedObj = NewBeyImages.find( (x) => { return x.id === parseInt(obj.id) }) 
    console.log("SelectedObj", SelectedObj)

    //3.) 
    SelectedObj.favorite = !SelectedObj.favorite
    console.log("SelectedObj after", SelectedObj)

    //4.) Update State
      this.setState({
        beyImages: NewBeyImages
      }, () => console.log("state",this.state))

  }

  render() {
    return (
      <div className="container">
        <BeyContainer beyImages={this.state.beyImages} handleClick={this.handleClick} />
        <Favorites beyImages={this.state.beyImages} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
