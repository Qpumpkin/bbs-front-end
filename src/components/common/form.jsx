import React, { Component } from 'react'
// import PropTypes from 'prop-types';

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

export const Form = class extends Component {
  state = {
    data: this.props.defaultValue || {},
    errors: this.props.defaultValue || {},
  }
  handleSubmit(e) {
    e.preventDefault()
    const submit = this.props.onSubmit.bind(this)
    submit()
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
              // 去 stackoverflow 上搜了一下 warning 发现原来是因为默认给了一个空对象导致，input的value出来是undefined，因此警告
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

export default {
  Form,
  Field,
  Input,
  Button,
};