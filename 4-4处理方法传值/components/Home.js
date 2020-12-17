import React from 'react';
import '../assets/css/index.css';
class Home extends React.Component {
    constructor(props) {
        super(props);   //固定写法
        this.state = {
            msg: '我是一个home组件',
            username:''

        }
    }

    run = (event) => {
        // alert(this.state.msg);
        //console.log(event);
       //event.target.style.background='blue';   /*获取执行事件的dom节点*/
       console.log(event.target.getAttribute('aid'));
       console.log(event.target.getAttribute('Text'));
    }

    inputChange = (e) => {
        // console.log('111');
        //获取表单的值
        //alert(e.target.value);
        console.log(e.target.value);
        this.setState({
            username: e.target.value
        })
    }
    getInput = (e) => { 
        alert(this.state.username);
    }
    render() {
        return (
            <div>
                {/* <h2>{this.state.msg}</h2> */}
                {/* 事件对象 */}
                <h2>事件对象演示</h2>
                <button onClick={this.run}>事件对象</button>
                <button aid="F123" Text="DDDDDDDD" onClick={this.run}>事件对象--获取属性</button><br></br>
                <input onChange={this.inputChange}/>
                <button onClick={this.getInput}>获取input的值</button>
            </div>
        )
    }
}

 export default Home;