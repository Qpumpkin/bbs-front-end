import React, { Component } from 'react'
import Login from '../login'
import Register from '../register'

class Mask extends Component {
  static maskType = {
    login: <Login />,
    register: <Register />,
  }
  render() {
    const { switchPrompt, prompt, type } = this.props
    const content = Mask.maskType[type]
    return (
      <div className="wrap" style={{ display: prompt ? '' : 'none' }}>
        <div className="wrap-container">
          <span className="wrap-close" onClick={switchPrompt}>X</span>
          <div className="wrap-content">
            <h3>你好，<br />希望你有快乐的一天！</h3>
            {content}
          </div>
        </div>
      </div>);
  }
}

export default Mask;