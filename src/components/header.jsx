import React from 'react'
import { Link } from 'react-router-dom'
import './header.sass'

function Header(props) {
  const { navList } = props;
  return (
    <header className="header">
      <nav>
        {navList.map((nav, idx) => <Link to={`/${nav.path}`} key={idx}>{nav.name}</Link>)}
      </nav>
    </header>);
}

export default Header
