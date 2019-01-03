import React from 'react'
import { Form, Field, Button } from './common/form'

const api = 'http://localhost:3001/auth/register'

function Register() {
  const config = {
    api,
    atr: ['username', 'password'],
    defaultValue: {
      username: '',
      password: '',
      repeatpassword: '',
    },
    success: function({ userInfo }) {
      localStorage.setItem('user', JSON.stringify(userInfo))
      window.location = '/'
    },
    error: function(res) {
      return {
        errors: {
          [res.type]: res.message
        }
      }
    }
  }
  return (
    <Form config={config}>
      <Field name="username" placeholder="请输入用户名..." />
      <Field name="password" type="password" placeholder="请输入密码..." />
      <Field name="repeatpassword" type="password" placeholder="请重复您输入的密码..."/>
      <Button label="提交" />
    </Form>
  )
}

export default Register;