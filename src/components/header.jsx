import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Register from './register'
import Login from './login'
import './header.sass'

class Header extends Component {
  handleLoginOut() {
    localStorage.removeItem('user')
    window.location = '/'
  }
  render() {
    const { navList, alert, userInfo } = this.props
    return (
      <header className="header">
        <nav>
          {navList.map((nav, idx) => <Link to={`/${nav.path}`} key={idx}>{nav.name}</Link>)}
        </nav>
        <div className="user-bar">{
          userInfo.id
          ? <React.Fragment>
              <div className="user-name">{userInfo.name}</div>
              <div className="login-out"><button onClick={() => this.handleLoginOut()}>退出登录</button></div>
            </React.Fragment>
          : <React.Fragment>
              <div className="login"><button onClick={() => alert(<Login />)}>登录</button></div>
              <div className="register"><button onClick={() => alert(<Register />)}>加入小南瓜</button></div>
            </React.Fragment>}
        </div>
      </header>);
  }
}

export default Header
