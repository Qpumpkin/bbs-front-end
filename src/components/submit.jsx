import React, { Component } from 'react';
import axios from 'axios'

const api = 'http://localhost:3001/article'

class Submit extends Component {
  state = {
    title: '',
    content: '',
  }
  componentDidMount() {
    const articleContent = document.getElementById('article-content')
    articleContent.addEventListener('input', ({ currentTarget: textarea }) => {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    })
  }
  handleChange = ({ target: input }) => {
    // console.log(e.currentTarget)
    const name = input.name
    const value = input.value
    this.setState({ [name]: value })
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const { title, content } = this.state
    const article = {title, content}
    await axios.post(api, article)
    // console.log(data)
  }
  render() {
    const { title, content } = this.state;
    return (
      <div className="submit">
        <form
          method="post"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>标题
              <input name="title" value={title} placeholder="请输入标题"/>
            </label>
          </div>
          <div className="form-group">
            <label>内容
              <textarea name="content" value={content} id="article-content" placeholder="请输入正文"/>
            </label>
          </div>
          <button className="submit-button">发布文章</button>
        </form>
      </div>
    );
  }
}

export default Submit;