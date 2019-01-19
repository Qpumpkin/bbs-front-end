import React, { Component } from 'react';
import './test.scss';

class Test extends Component {
  state = {
    percentage: 60,
  }
  render() {
    return (
      <React.Fragment>
        <div className="test-stripe-1" />
        <div className="test-stripe-2" />
        <div className="test-stripe-3" />
        <div className="test-stripe-4" />
        <div className="test-stripe-5" />
        {/* <div className="test-stripe-6" /> */}
        <div className="pie" />
        <div className="pie1" />
        <div className="pie2" style={{ animationDelay: `-${this.state.percentage}s` }} />
      </React.Fragment>
    );
  }
}
export default Test