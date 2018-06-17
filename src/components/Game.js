import React from "react";
import GameContext from "../contexts/GameContext";

class Game extends React.Component {
  render() {
    return (
      <GameContext.Consumer>
        {GameContext => (
          <React.Fragment>
            <div className="score">Score : {GameContext.score}</div>
            <div className="color-code">{GameContext.answer}</div>
            {GameContext.question.map((item, index) => (
              <div
                className="game-box"
                key={index}
                style={{ backgroundColor: `${item}` }}
                onClick={GameContext.handleBoxClick}
              />
            ))}
          </React.Fragment>
        )}
      </GameContext.Consumer>
    );
  }
}

export default Game;
