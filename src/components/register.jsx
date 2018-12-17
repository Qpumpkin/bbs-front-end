import React, { Component } from 'react'
import axios from 'axios'

const api = 'http://localhost:3001/auth/register'

class Register extends Component {
  state = {
    data: {
      username: '',
      password: '',
      repeatpassword: '',
    },
    errors: {},
  }
  handleChange({ target: input }) {
    const { name, value } = input
    const data = {...this.state.data}
    data[name] = value
    this.setState({ data })
    console.log(input.value)
  }
  async handleSubmit(e) {
    e.preventDefault()
    const { username, password } = this.state.data
    const userInfo = { username, password };
    try {
      const { data } = await axios.post(api, userInfo)
      localStorage.setItem('user', JSON.stringify(data.userInfo))
      window.location = '/'
    } catch(e) {
      if (e.response && e.response.status === 403) {
        const { data } = e.response;
        console.log('出错的信息', data)
        const { type } = data;
        const errors = {
          [type]: data.message
        }
        this.setState({ data: {
          username: '',
          password: '',
          repeatpassword: '',
        }, errors })
      } else {
        throw e;
      }
    }
  }
  render() {
    const { username, password, repeatpassword } = this.state.data
    const { errors } = this.state
    console.log(this.state.data)
    return (
      <div className="form">
        <form onChange={(e) => this.handleChange(e)} onSubmit={(e) => this.handleSubmit(e)}>
          <div className="input-wrap">
            <input
              name="username"
              value={username}
              placeholder="请输入您要注册的用户名"
            />
            {errors.username && (
            <span className="error">{errors.username}</span>)}
          </div>
          <div className="input-wrap">
            <input
              name="password"
              value={password}
              type="password"
              placeholder="请输入您的密码"
            />
            {errors.password && (
            <span className="error">{errors.password}</span>)}
          </div>
          <div className="input-wrap">
            <input
              name="repeatpassword"
              value={repeatpassword}
              type="password"
              placeholder="请重复您的密码"
            />
            {errors.passwordrepeat && (
            <span className="error">{errors.passwordrepeat}</span>)}
          </div>
          <div className="button">
            <button>提交</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;