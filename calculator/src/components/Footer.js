import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer className="bg-warning text-center text-dark fixed-bottom ">
          <div className="text-center p-3">© 2022 Copyright</div>
        </footer>
      </>
    );
  }
}

export default Footer;
