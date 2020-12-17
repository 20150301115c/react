import React from 'react';

class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'ssxy'
         };
    }

    inputChange=(e)=>{
        this.setState({

            username:e.target.value
        })

    }

    setUsername=()=>{
        this.setState({

            username:'李四'
        })

    }
    render() {
        return (
            <div>
                <h2>我是TodoList组件,双向数据绑定</h2>
                <br/>
                <input  value={this.state.username} onChange={this.inputChange}/> 
                <p> {this.state.username}</p>
                               
               <button onClick={this.setUsername}>改变username的值</button>

            </div>
        );
    }
}
export default Todolist;
