import React from "react";
import "../App.css";
import GameContext from "../contexts/GameContext";

class Wrong extends React.Component {
  render() {
    return (
      <GameContext.Consumer>
        {GameContext => (
          <React.Fragment>
            <div className="modal">
              <div className="modal-false">
                TOO BAD :(
                <div className="finalScore">
                  This is Final Score : {GameContext.score}
                </div>
                <button
                  className="close"
                  onClick={e => window.location.reload()}
                >
                  PLAY AGAIN
                </button>
              </div>
            </div>
          </React.Fragment>
        )}
      </GameContext.Consumer>
    );
  }
}

export default Wrong;
