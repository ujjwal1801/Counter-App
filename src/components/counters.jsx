import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counter, onDelete, onIncrement, onReset, onDecrement } = this.props; //Object Destructuring
    return (
      <React.Fragment>
        <div>
          <button onClick={onReset} className="btn btn-primary m-4">
            Reset
          </button>
          <br />
          {counter.map(counter => (
            <Counter
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
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
