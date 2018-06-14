import React from "react";

class Game extends React.Component {
  render() {
    const { score, answer, question, handleBoxClick } = this.props;
    return (
      <React.Fragment>
        <div className="score">Score : {score}</div>
        <div className="color-code">{answer}</div>
        {question.map((item, index) => (
          <div
            className="game-box"
            key={index}
            style={{ backgroundColor: `${item}` }}
            onClick={handleBoxClick}
          >
            {item}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Game;
