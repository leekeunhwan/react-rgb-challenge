import React, { Component } from "react";
import "./App.css";
import GameContext from "./contexts/GameContext";
import Answer from "./components/Answer";
import Wrong from "./components/Wrong";
import Game from "./components/Game";
import Header from "./components/Header";

// 메소드처럼 사용할 것이 아니라면 함수를 꼭 안에서만 정의할 필요는 없다.
function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function randomColorCode() {
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

class App extends Component {
  componentWillMount() {
    this.makeQuestion();
  }

  componentDidMount() {
    this.makeAnswer();
  }

  makeQuestion = () => {
    this.setState({
      question: [randomColorCode(), randomColorCode(), randomColorCode()]
    });
  };

  makeAnswer = () => {
    this.setState({
      answer: this.state.question[Math.floor(Math.random() * 3)]
    });
  };

  handleBoxClick = e => {
    if (this.state.answer === e.target.style.backgroundColor) {
      this.setState({
        page: "Answer",
        score: this.state.score + 1
      });
      this.makeQuestion();
    } else {
      this.setState({
        page: "Wrong"
      });
    }
  };

  nextGame = () => {
    this.setState({ page: "game", round: this.state.round + 1 });
    this.makeAnswer();
  };

  state = {
    page: "game",
    score: 0,
    question: [],
    answer: "",
    round: 0,
    handleBoxClick: this.handleBoxClick,
    nextGame: this.nextGame
  };

  render() {
    return (
      <GameContext.Provider value={this.state}>
        <React.Fragment>
          {this.state.page === "game" ? (
            <React.Fragment>
              <Header />
              <Game />
            </React.Fragment>
          ) : this.state.page === "Answer" ? (
            <Answer />
          ) : (
            <Wrong />
          )}
        </React.Fragment>
      </GameContext.Provider>
    );
  }
}

export default App;
