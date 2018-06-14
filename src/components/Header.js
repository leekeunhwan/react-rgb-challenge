import React from "react";

class Header extends React.Component {
  render() {
    return (
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
      </React.Fragment>
    );
  }
}

export default Header;
