import React, { Component } from 'react';
//  import Home from './components/Home';
// import List from './components/List';
import ReactForm from './components/ReactForm';
class App extends Component {
  //render 模板   jsx
  render() {
    return (
      <div className="App">
         你好react-根组件
         <hr />
          {/* <Home /> */}
         <br/>
          <ReactForm /> 
      </div>
    );
  }
}

export default App;
