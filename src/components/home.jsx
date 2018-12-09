import React, { Component } from 'react'
import axios from 'axios'

const api = 'http://localhost:3001/article'
class Home extends Component {
  state = {
    articleList: [],
  }
  async componentDidMount() {
    const { data } = await axios.get(api)
    const articleList = data
    this.setState({ articleList })
  }
  render() {
    const { articleList } = this.state
    return (
      <div className="article-container">
        <ul className="article-list">
          {articleList.map(article => (
            <li className="article" key={article.id}>
              <h4 className="title">{article.title}</h4>
              <p className="abstract">{article.content}</p>
              <div className="article-sign">
                <div className="user-info">
                  <img className="avatar" src={article.userInfo.avatar} alt="头像"/>
                  <span className="nick-name">{article.userInfo.nickName}</span>
                </div>
                <span className="date">{article.date}</span>
              </div>
            </li>))}
        </ul>
      </div>
    );
  }
}

export default Home;