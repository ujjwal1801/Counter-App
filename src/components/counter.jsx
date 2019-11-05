import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.counter.value
  };
  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.incrementCount} className="btn btn-secondary">
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
        <br />
      </React.Fragment>
    );
  }

  incrementCount = () => {
    this.setState({ value: this.state.value + 1 });
  };
  renderTags() {
    //if (this.state.tags.length === 0) return <h2>There are no tags!!!</h2>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
