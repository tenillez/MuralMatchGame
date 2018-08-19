import React, { Component } from "react";
import MuralCard from "./components/MuralCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import murals from "./murals.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards
  state = {
    message: "Click a mural to begin!",
    score: 0,
    highScore: 0,
    murals: murals,
    unselectedMurals: murals
  };

  componentDidMount() {
  }

  shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  selectMural = name => {
      const findMural = this.state.unselectedMurals.find(item => item.name === name);

      if(findMural === undefined) {
          // failure to select a new mural
          this.setState({ 
              message: "You guessed incorrectly!",
              highScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore,
              score: 0,
              murals: murals,
              unselectedMurals: murals
          });
      }
      else {
          // success to select a new mural
          const newMurals = this.state.unselectedMurals.filter(item => item.name !== name);
          
          this.setState({ 
              message: "You guessed correctly!",
              score: this.state.score + 1,
              murals: murals,
              unselectedMurals: newMurals
          });
      }

      this.shuffleArray(murals);
  };

  render() {
      return (
          <Wrapper>
              <Nav
                  message={this.state.message}
                  score={this.state.score}
                  highScore={this.state.highScore}
              />
              <Title />
              {
                  this.state.murals.map(mural => (
                      <MuralCard
                          name={mural.name}
                          image={mural.image}
                          selectMural={this.selectMural} 
                          score={this.state.score}
                      />
                  ))
              }
          </Wrapper>
      );
  }
}

export default App;