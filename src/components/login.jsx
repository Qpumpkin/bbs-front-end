import React, { Component } from 'react'
import axios from 'axios'
import { Form, Field, Button } from './common/form'

const api = 'http://localhost:3001/auth/login'

class Login extends Component {
  // state = {
  //   data: {
  //     username: '',
  //     password: '',
  //   },
  //   errors: {},
  // }
  // handleChange({ target: input }) {
  //   const { name, value } = input
  //   const data = {...this.state.data}
  //   data[name] = value;
  //   this.setState({ data })
  //   console.log(value)
  // }
  async handleSubmit() {
    const { username, password } = this.state.data
    try {
      const { data } = await axios.post(api, { username, password })
      localStorage.setItem('user', JSON.stringify(data.userInfo))
      window.location = '/'
    } catch(e) {
      if (e.response && e.response.status) {
        const { data } = e.response
        const errors = { password: data.message }
        this.setState({ errors })
      } else {
        throw e;
      }
    }
  }
  render() {
    // const {
    //   data,
    //   errors,
    // } = this.state
    // const { username, password } = data
    return (
      <Form
        defaultValue={{ username: '', password: '' }}
        onSubmit={this.handleSubmit}
      >
        <Field name="username" placeholder="请输入用户名" />
        <Field name="password" type="password" placeholder="请输入密码" />
        <Button label="提交" />
      </Form>
      // <div className="form">
      //   <form
      //     onChange={(e) => this.handleChange(e)}
      //     onSubmit={(e) => this.handleSubmit(e)}
      //   >
      //     <div className="input-wrap">
      //       <input
      //         name="username"
      //         value={username}
      //         placeholder="请输入您的用户名"
      //       />
      //       {errors.username && (
      //       <span className="error">{errors.username}</span>)}
      //     </div>
      //     <div className="input-wrap">
      //       <input
      //         name="password"
      //         value={password}
      //         type="password"
      //         placeholder="请输入您的密码"
      //       />
      //       {errors.password && (
      //       <span className="error">{errors.password}</span>)}
      //     </div>
      //     <div className="button">
      //       <button>提交</button>
      //     </div>
      //   </form>
      // </div>
    );
  }
}

export default Login;