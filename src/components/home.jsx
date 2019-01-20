import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import design from '../images/design.jpg';
import './home.scss';

const api = 'http://localhost:3001/article'

const data = [{
  title: '设计类视频教程',
  total: 52,
  img: design,
  url: '#/1',
}, {
  title: '技术类视频教程',
  total: 51,
  img: design,
  url: '#/1',
}];

function BoardItem(props) {

};

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
      <div className="home">
        <div className="search-wrapper">
          <input className="search" type="text" placeholder="搜索内容"/>
        </div>
        <h1 className="title">收录的一些文章、视频...</h1>
        <p>(已收录{data.length}门课程，还在整理中...)</p>
        <h2 className="title">课程目录</h2>
        <ul className="content-list">
          {data.map(it => (
            <li>
              <Link to={it.url}>
                <figure className="">
                  <img src={it.img} alt={it.title}/>
                  <figcaption>{it.title}</figcaption>
                </figure>
              </Link>
            </li>))}
        </ul>
      </div>
      // <div>
      //   <div className="article-container module-card">
      //     <ul className="article-list">
      //       {articleList.map(article => (
      //         <Link to={`/article/${article.id}`} key={article.id}>
      //           <li className="article">
      //             <h4 className="title">{article.title}</h4>
      //             <p className="abstract">{article.content}</p>
      //             <div className="article-sign">
      //               <div className="user-info">
      //                 <img className="avatar" src={article.userInfo.avatar} alt="头像"/>
      //                 <span className="nick-name">{article.userInfo.nickName}</span>
      //               </div>
      //               <span className="date">{article.date}</span>
      //             </div>
      //           </li>
      //         </Link>))}
      //     </ul>
      //   </div>
      // </div>
    );
  }
}

export default Home