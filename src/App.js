import React, { Component } from "react";
import "./App.css";
import Answer from "./components/Answer";
import Wrong from "./components/Wrong";

// 메소드처럼 사용할 것이 아니라면 함수를 꼭 안에서만 정의할 필요는 없다.
function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function randomColorCode() {
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

class App extends Component {
  state = {
    page: "game",
    score: 0,
    question: [],
    answer: "",
    round: 0
  };

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

  render() {
    return (
      <React.Fragment>
        {this.state.page === "game" ? (
          <React.Fragment>
            <div>
              <h1>
                {" "}
                The Great
                <br />
                <span>RGB</span>
                <br /> guessing challenge
              </h1>
            </div>
            <div className="score">Score : {this.state.score}</div>
            <div className="color-code">{this.state.answer}</div>
            {this.state.question.map((item, index) => (
              <div
                className="game-box"
                key={index}
                style={{ backgroundColor: `${item}` }}
                onClick={this.handleBoxClick}
              />
            ))}
          </React.Fragment>
        ) : this.state.page === "Answer" ? (
          <Answer nextGame={this.nextGame} />
        ) : (
          <Wrong score={this.state.score} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
