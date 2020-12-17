import React from 'react';
import '../assets/css/index.css';

class Home extends React.Component {
    constructor(props) {
        super(props);   //固定写法
        this.state = {
            msg: '我是一个home组件',
        }
    }
    run() {
        alert('我是一个run方法')
    }
    render() {
            return (
                <div>
                    <h2>{this.state.msg}A</h2>
                    <br></br>
                    <button onClick={this.run}>事件对象</button>
                </div>
            )
    }
}
    export default Home;

