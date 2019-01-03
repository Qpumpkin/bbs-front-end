import React, { Component } from 'react'

export class Form extends Component {
  state = {
    data: this.props.config.defaultValue || {},
    errors: this.props.config.defaultValue || {},
  }
  handleSubmit(e) {
    e.preventDefault()
    const { config } = this.props // 最好不要解构config，可以保留住函数的this。
    let data = {}; // 采集数据
    if ('atr' in config) {
      config.atr.forEach(key => {
        console.log(key)
        data[key] = this.state.data[key]
      })
    } else { // 没有专门设置提交的字段的话就默认全部提交
      data = this.state.data
    }
    console.log(data)
    fetch(config.api, { // 不开心，因为fetch跨域限制严格的原因弄了好久。前后端都是我自己写的。
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        'mode': 'cors',
      })
    })
    .then((res) => {
      if (res.status !== 200) {
        return Promise.reject(res)
      } else {
        res.json()
          .then((res) => {
            const state = config.success(res)
            if (state) { // 如果配置的 success 有返回值的话就更新form的状态
              this.setState(state)
            }
          })       
      }
    })
    .catch(err => {
      err.json()
      .then(err => {// 这里传到error那边还是异步的话就太麻烦了
        const state = config.error(err)
        if (state) {
          this.setState(state)
        }
      })
    })
  }
  handleChange = ({ target: input }) => {
    const { name, value } = input
    const data = { ...this.state.data }
    data[name] = value
    this.setState({ data })
  }
  render() {
    const { data, errors } = this.state
    return (
      <form className="form"
        onSubmit={(e) => this.handleSubmit(e)}
      >
        {React.Children.map(
          this.props.children,
          (children) => {
            if (children.type !== Field) return children
            const { name } = children.props
            const control = React.cloneElement(children,{
              value: data[name],
              error: errors[name],
              onChange: this.handleChange,
            });
            return control;
          })}
      </form>
    );
  }
}

export function Field({ error, ...rest}) {
  return (
    <div className="input-wrap">
      <Input {...rest} />
      <span
        className={`error ${error ? '' : 'hidden'}`}
       >{error}
       </span>
    </div>)
}

export function Input(props) {
  return <input {...props} />
}
Input.defaultProps  = {
  type: 'text',
  placeholder: '请输入内容...',
};

export function Button({ label }) {
  return <div className="button"><button>{label}</button></div>
}

export default {
  Form,
  Field,
  Input,
  Button,
};