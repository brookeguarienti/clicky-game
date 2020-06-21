import React, { Component } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Cards from "./components/imgContainer";
import Navbar from "./components/navbar";
import food from "./food.json";
import "./App.css";

// shuffle upon each click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // this is setting the variables of the game that will change as a state
  state = {
    food: food,
    score: 0,
    topScore: 0,
    clickedfood: [],
  };

  handleClickedImage = (id) => {
    // assign the state of the empty array to a let - this allows for the variable to be updated
    let clickedfood = this.state.clickedfood;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      showAlert: 0,
    });

    // if the clicked image has an id that is not in the array
    if (clickedfood.indexOf(id) === -1) {
      // push that id into the array to be stored
      clickedfood.push(id);
      console.log(clickedfood);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.makeShuffle();
      // if the score = 16 then showSuccess to equal 1
    } else if (this.state.score === 16) {
      // alert player wins
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedfood: [],
      });
      // all else, restart the score
      // for example, if the id of the img clicked is already in the array
    } else {
      // alert player loss
      this.setState({
        score: 0,
        clickedfood: [],
      });
      console.log("duplicate");
      this.setState({
        showAlert: 1,
      });
    }
    // if the score is greater than the topScore, then set new topScore to score
    if (score > topScore) {
      this.setState({
        topScore: score,
      });
    }
  };

  // handleIncrement increases this.state.score by 1
  // this increase the score of the game by 1
  handleIncrement = () => {
    // setState updates a components states
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle the images
  makeShuffle = () => {
    this.setState({ food: shuffle(food) });
  };

  // render the Navbar, Header, Footer, and Image Container to the page
  render() {
    return (
      <div className="container">
         <div>
        {/* Navbar render score and top score */}
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        </div>
        {/* <div
          className="alert alert-danger"
          style={{ opacity: this.state.showAlert }}
        >
          Oh no! You've already clicked this one. Please try again!
        </div>
        <div
          className="alert alert-success"
          style={{ opacity: this.state.showSuccess }}
        >
          High-Five! You won!
        </div> */}
        <Header />
        <div className="row">
          {this.state.food.map((food) => (
            <Cards handleClickedImage={this.handleClickedImage}
              key={food.id}
              id={food.id}
              name={food.name}
              image={food.image}
              clickedfood={this.clickedImage}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
