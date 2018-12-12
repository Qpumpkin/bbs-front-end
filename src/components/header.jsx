import React from 'react'
import { Link } from 'react-router-dom'
import Register from './register'
import Login from './login'
import './header.sass'

function Header(props) {
  const { navList, alert } = props;
  return (
    <header className="header">
      <nav>
        {navList.map((nav, idx) => <Link to={`/${nav.path}`} key={idx}>{nav.name}</Link>)}
      </nav>
      <div className="user-bar">
        <div className="login"><button onClick={() => alert(<Login />)}>登录</button></div>
        <div className="register"><button onClick={() => alert(<Register />)}>加入小南瓜</button></div>
      </div>
    </header>);
}

export default Header
