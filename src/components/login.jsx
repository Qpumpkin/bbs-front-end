import React from 'react'
import { Form, Field, Button } from './common/form'

const api = 'http://localhost:3001/auth/login'

function Login() {
  const config = {
    api,
    defaultValue: { username: '', password: '' },
    success: function({ userInfo }) {
      localStorage.setItem('user', JSON.stringify(userInfo))
      window.location = '/'
    },
    error: function(error) {
      return {
        errors: { [error.type]: error.message }
      }
    },
  }
  return (
    <Form
      config={config}
    >
      <Field name="username" placeholder="请输入用户名" />
      <Field name="password" type="password" placeholder="请输入密码" />
      <Button label="提交" />
    </Form>
  );
}

export default Login;