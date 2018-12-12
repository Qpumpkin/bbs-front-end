import React, { Component } from 'react'
import axios from 'axios'

const api = 'http://localhost:3001/auth/login'

class Login extends Component {
  state = {
    username: '',
    password: '',
  }
  handleChange({ target: input }) {
    const { name, value } = input;
    this.setState({ [name]: value });
    console.log(input.value);
  }
  async handleSubmit(e) {
    e.preventDefault()
    const { username, password } = this.state
    const { data } = await axios.post(api, { username, password })
    console.log(data)
  }
  render() {
    const { username, password } = this.state
    return (
      <div className="form">
        <form
          onChange={(e) => this.handleChange(e)}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <input
            name="username"
            value={username}
            placeholder="请输入您的用户名"
          />
          <input
            name="password"
            value={password}
            type="password"
            placeholder="请输入您的密码"
          />
          <div className="button">
            <button>提交</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;