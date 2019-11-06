import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-primary">
            {this.props.totalCount}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
