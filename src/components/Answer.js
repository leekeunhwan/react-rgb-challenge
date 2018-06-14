import React from "react";
import "../App.css";

class Answer extends React.Component {
  render() {
    const { nextGame } = this.props;
    return (
      <React.Fragment>
        <div className="modal">
          <div className="modal-right">
            THAT'S RIGHT!
            <br />
            <button className="close" onClick={nextGame}>
              NEXT COLOR
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Answer;
