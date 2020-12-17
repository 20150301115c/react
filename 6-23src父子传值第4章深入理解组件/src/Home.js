import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '这是一个首页组件',
            title: '首页'
        }
    }

    render() {
        return (
            <div>
                <h1>  {this.state.msg}</h1>
                <br />
                <hr />
                <Header  title={this.state.title} />
            </div>
        )
    }

}
export default Home;