import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.scss'

class Header extends Component {
  handleLoginOut() {
    localStorage.removeItem('user')
    window.location = '/'
  }
  render() {
    const { navList, handlePrompt, userInfo } = this.props
    return (
      <header className="header">
        <div className="header-container">
          <div className="site-brand">
            <h1>IT浪人</h1>
            <p>掌握技能，而不是学习知识。</p>
          </div>
          <div className="nav-container">
            <nav>
              {navList.map((nav, idx) => <Link to={`/${nav.path}`} className="tab" key={idx}>{nav.name}</Link>)}
            </nav>
            <div className="user-bar">{
              userInfo.id
              ? <React.Fragment>
                  <div className="user-name">{userInfo.name}</div>
                  <div className="login-out"><button onClick={() => this.handleLoginOut()}>退出登录</button></div>
                </React.Fragment>
              : <React.Fragment>
                  <div className="login"><button onClick={() => handlePrompt('login')}>登录</button></div>
                  <div className="register"><button onClick={() => handlePrompt('register')}>加入小南瓜</button></div>
                </React.Fragment>}
            </div>
          </div>
        </div>
      </header>);
  }
}

export default Header
