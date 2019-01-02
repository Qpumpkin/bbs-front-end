import React, { Component } from 'react'
import axios from 'axios'
import { Form, Field, Button } from './common/form'

const api = 'http://localhost:3001/auth/login'

class Login extends Component {
  async handleSubmit() {
    const { username, password } = this.state.data
    try {
      const response = await axios.post(api, { username, password })
      console.log(response);
      const { data } = response
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
    const config = {
      api,
      success: function(res) {
        res.json()
        .then(({ userInfo }) => {
          localStorage.setItem('user', JSON.stringify(userInfo))
          window.location = '/'
        })
      },
      error: function(error) {
        return { errors: {
          [error.type]: error.message,
        }}
      }
    };
    // const {
    //   data,
    //   errors,
    // } = this.state
    // const { username, password } = data
    return (
      <Form
        defaultValue={{ username: '', password: '' }}
        config={config}
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