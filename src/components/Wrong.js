import React from "react";
import "../App.css";

class Wrong extends React.Component {
  render() {
    const { score } = this.props;
    return (
      <React.Fragment>
        <div className="modal">
          <div className="modal-false">
            TOO BAD :(
            <div className="finalScore">This is Final Score : {score}</div>
            <button className="close" onClick={e => window.location.reload()}>
              PLAY AGAIN
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Wrong;
