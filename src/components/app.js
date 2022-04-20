import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Portfolio for Edward Oree</h1>
        <h2>I love this class!</h2>
        <div>{moment().format("[Today's Date is ] D MMM YYYY")}</div>
      </div>
    );
  }
}
