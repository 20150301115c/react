import React from 'react';
import '../assets/css/index.css';

class Home extends React.Component {
    constructor(props) {
        super(props);   //固定写法
        this.state={
            msg:'我是一个home组件',
            username:''
        } 

    }

    run = (event) => {
        // alert(this.state.msg);
        // console.log(event);
        // alert(event.target);   /*获取执行事件的dom节点*/
        event.target.style.background = 'red';

        //获取dom的属性
        alert(event.target.getAttribute('aid'))
        
    }


    inputChange = (e) => {
        // console.log('111');
        //获取表单的值
        console.log(e.target.value);
        this.setState({

            username: e.target.value
        })
    }

    getInput = () => {

        alert(this.state.username);
    }

    render() {
        return (
            <div>
                {/* <h2>{this.state.msg}</h2> */}
                {/* 事件对象 */}
                <h2>事件对象演示</h2>
                <button onClick={this.run}>事件对象</button><br />
                <button aid="F123" onClick={this.run}>事件对象--获取属性</button><br></br>
                <hr />
                <h2>表单事件</h2>
                <input onChange={this.inputChange} /> <button onClick={this.getInput}>获取input的值</button>


            </div>
        )
    }
}
export default Home;
