import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Submit from './components/submit'
import Topic from './components/topic'
import Self from './components/userCenter'
import Article from './components/article'
import Test from './components/test';
import Mask from './components/common/mask';
import Footer from './components/footer';
import './App.css'
import './main.scss'

class App extends Component {
  state = {
    prompt: false,
    promptType: '',
    userInfo: null,
  }
  handlePrompt(promptType) {
    const { prompt } = this.state
    this.setState({ prompt: !prompt, promptType })
  }
  componentWillMount() {
    const user = localStorage.getItem('user');
    let userInfo
    try {
      userInfo = JSON.parse(user) || { id: 0, name: '未登录' }
    } catch (e) {
      console.log('读取userInfo失败。')
      // userInfo = { id: 0, name: '未登录' }
    }
    if (userInfo) {
      this.setState({ userInfo })
    }
  }
  render() {
    const navList = [{
      name: '首页',
      path: '',
    }, {
      name: '写文章',
      path: 'submit',
    }, {
      name: '话题',
      path: 'topic',
    }]
    const { prompt, promptType, userInfo } = this.state
    return (
      <React.Fragment>
        <Mask
          prompt={prompt}
          type={promptType}
          switchPrompt={() => this.handlePrompt('')}
        />
        <Header
          navList={navList}
          userInfo={userInfo}
          handlePrompt={(type) => this.handlePrompt(type)}
        />
        <div className="content">
          <Switch>
            <Route
              path="/submit"
              render={props => <Submit userInfo={userInfo} {...props} />}
            />
            <Route
              path="/article/:id"
              render={props => <Article userInfo={userInfo} {...props} />}
            />
            <Route path="/topic" component={Topic} />
            <Route path="/userCenter" component={Self} />
            <Route path="/test" component={Test} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
