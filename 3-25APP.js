import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <label > <input type="radio" name='gender' value="男人"
          onChange={this.handleChange} />男人</label><br />
        <label > <input type="radio" name='gender' value="女人"
          onChange={this.handleChange} />女人</label>
        <div>你选择的值是： {this.state.value}</div>
      </div>
    )
  }
}
export default App;
