import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counter, onDelete, onIncrement, onReset } = this.props; //Object Destructuring
    return (
      <React.Fragment>
        <div>
          <button onClick={this.props.onReset} className="btn btn-primary m-2">
            Reset
          </button>
          {this.props.counter.map(counter => (
            <Counter
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
              key={counter.id}
              counter={counter}
            >
              <h4>Counter #{counter.id}</h4>
            </Counter>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
