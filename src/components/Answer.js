import React from "react";
import "../App.css";

class Answer extends React.Component {
  render() {
    const { nextGame } = this.props;
    return (
      <React.Fragment>
        <div>
          THAT'S RIGHT!
          <br />
          <button onClick={nextGame}>NEXT COLOR</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Answer;
