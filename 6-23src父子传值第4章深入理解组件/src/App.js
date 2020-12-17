import React, { Component } from 'react';
import Home from './Home';
import News from './News';
class App extends Component {
  render() {
    return (
      <div className="App">
       {/*<Home /> */}
       <News />
       <br></br>
      </div>
    );
  }  
}
export default App;
