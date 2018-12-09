import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Submit from './components/submit'
import Topic from './components/topic'
import Self from './components/self'
import './App.css'

class App extends Component {
  render() {
    const navList = [{
      name: '首页',
      path: '',
    }, {
      name: '发表文章',
      path: 'submit',
    }, {
      name: '话题',
      path: 'topic',
    }, {
      name: '个人',
      path: 'self',
    }]
    return (
      <React.Fragment>
        <Header navList={navList} />
        <div className="content">
          <Switch>
            <Route path="/submit" component={Submit} />
            <Route path="/topic" component={Topic} />
            <Route path="/self" component={Self} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
