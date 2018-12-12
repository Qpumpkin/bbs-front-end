import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Submit from './components/submit'
import Topic from './components/topic'
import Self from './components/userCenter'
import './App.css'

class App extends Component {
  state = {
    alert: {
      visible: false,
      content: null,
    },
  }
  alertWrapper = (content) => {
    const { alert } = this.state
    this.setState({
      alert: {
        visible: !alert.visible,
        content: content,
      }
    })
  }
  renderWrap() {
    const { visible, content } = this.state.alert
    return (
    <div className="wrap" style={{ display: visible ? '' : 'none' }}>
      <div className="wrap-container">
        <span className="wrap-close" onClick={() => this.alertWrapper(null)}>X</span>
        <div className="wrap-content">
          <h3>你好，<br />希望你有快乐的一天！</h3>
          {content}
        </div>
      </div>
    </div>);
  }
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
    }]
    const { alert } = this.state
    return (
      <React.Fragment>
        {this.renderWrap(123455, alert)}  
        <Header navList={navList} alert={this.alertWrapper} />
        <div className="content">
          <Switch>
            <Route path="/submit" component={Submit} />
            <Route path="/topic" component={Topic} />
            <Route path="/userCenter" component={Self} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}


// content = (
//   div
// )
export default App;
