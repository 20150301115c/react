import { bindElementToQueries } from '@testing-library/react';
import React from 'react';
import '../assets/css/index.css';

class Home extends React.Component {
    // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象
    constructor(props) {
        super(props);   //固定写法
        this.state = {
            msg: '我是一个home组件',
            message: '我是一个message',
            username: '我是中国人'

        }
        //第二种改变this指向的方法
        this.getMessage = this.getMessage.bind(this);
       //this.getData = this.getData.bind(this);
    }

    run() {
        alert('我是一个run方法')
    }

    getData(){
        alert(this.state.msg);
    }

    getMessage(){
        alert(this.state.message);
    }
    getName=()=>{
        alert(this.state.username);
    }

    setData=()=>{
        //改变state的值
        this.setState({
            msg:"我是一个home组件 这是改变后的值"
        })
    }

    setName=(str,str1)=>{
        //改变state的值
        this.setState({
            //username:str

        })

        alert(str);
        alert(str1);
    }


    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <h2>我的姓名是：{this.state.username}</h2>
                <br></br>
                <button onClick={this.run}>执行方法</button>
                <br></br>
                <button onClick={this.getData.bind(this)}>获取数据第一种方法 </button> 

                <br />
                 <button onClick={this.getMessage}>获取数据--第二种改变this指向的方法</button>
             
                <br />
                 <button onClick={this.getName}>改变state里面的值：第三种,用箭头函数</button>
                 <br />
                 <button onClick={this.setData}>改变state里面的值</button>
                 <br />
                 <button onClick={this.setName.bind(this, '李要清','xta lh ')}>执行方法传值</button>
            </div>
        )
    }
}
export default Home;
