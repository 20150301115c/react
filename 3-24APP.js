import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择您最喜欢的课程
 <select value={this.state.value} onChange={this.handleChange}>
            <option value="R001">React</option>
            <option value="A002">ASP.NET</option>
            <option value="H003">HTML+CSS </option>
            <option value="J004">Javascript</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
export default App;
