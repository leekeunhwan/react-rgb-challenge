import React from "react";
import "../App.css";
import GameContext from "../contexts/GameContext";

class Answer extends React.Component {
  render() {
    return (
      <GameContext.Consumer>
        {GameContext => (
          <React.Fragment>
            <div className="modal">
              <div className="modal-right">
                THAT'S RIGHT!
                <br />
                <button className="close" onClick={GameContext.nextGame}>
                  NEXT COLOR
                </button>
              </div>
            </div>
          </React.Fragment>
        )}
      </GameContext.Consumer>
    );
  }
}

export default Answer;
