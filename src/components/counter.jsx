import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
    tags: ["tag1", "tag2"]
  };
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
        <div>{this.renderTags()}</div>
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <h3>There are no tags</h3>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
