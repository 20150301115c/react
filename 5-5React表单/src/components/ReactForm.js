import React, { Component } from 'react';

class ReactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: "react表单",
			name: '',
			sex: '男',
			city: '',
			citys: [

				'北京', '上海', '深圳'
			],
			hobby: [
				{
					'title': "睡觉",
					'checked': true
				},
				{
					'title': "吃饭",
					'checked': false
				},
				{
					'title': "编程",
					'checked': true
				}
			],
			info: ''
		};
	}

	handelSubmit = (e) => {
		//阻止submit的提交事件
		e.preventDefault();
		console.log(this.state.name, this.state.sex, this.state.city,
			 this.state.hobby, this.state.info);
	}


	handelName = (e) => {
		this.setState({

			name: e.target.value
		})
	}
	handelSex = (e) => {

		this.setState({

			sex: e.target.value
		})
	}
	handelCity = (e) => {
		this.setState({
			city: e.target.value
		})
	}
	handelHobby = (key) => {
		var hobby = this.state.hobby;
		hobby[key].checked = !hobby[key].checked;
		this.setState({
			hobby: hobby
		})
	}
	handleInfo=(e) =>{
		this.setState({
			info: e.target.value
		})
	}

	render() {
		return (
			<div>
				<h2>{this.state.msg}</h2>
				<form onSubmit={this.handelSubmit}>
					用户名:  <input type="text" value={this.state.name} onChange={this.handelName} />
					性别:    <input type="radio" value="男" checked={this.state.sex == '男'} onChange={this.handelSex} />男
                            <input type="radio" value="女" checked={this.state.sex == '女'} onChange={this.handelSex} />女 <br /><br />
					居住城市:
                    <select value={this.state.city} onChange={this.handelCity}>
						{
							this.state.citys.map(function (value, key) {
								return <option key={key}>{value}</option>
							})
						}
					</select><br></br>
					爱好:
            {
						// 注意this指向
						this.state.hobby.map((value, key) => {
							return (
								<span key={key}>
									<input type="checkbox" checked={value.checked} onChange={this.handelHobby.bind(this, key)} /> {value.title}
								</span>
							)
						})
					}

					<br />
				
					备注：<textarea vlaue={this.state.info}  onChange={this.handleInfo} />


					<hr />
					<input type="submit" value='提交' /> <br />

				</form>
			</div>
		);
	}
}

export default ReactForm;
