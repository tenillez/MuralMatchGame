import React, { Component } from "react";
import MuralCard from "./components/MuralCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import murals from "./murals.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards
  state = {
    murals,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.murals.forEach(MuralCard => {
      MuralCard.count = 0;
    });
    alert(`SORRY, GAME OVER! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.murals.find((o, i) => {
      if (o.id === id) {
        if (murals[i].count === 0) {
          murals[i].count = murals[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function (){
            console.log(this.state.score);
          });
          this.state.murals.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>Austin Murals' Clicky Game</Title>
        {this.state.murals.map(card => (
          <MuralCard
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;