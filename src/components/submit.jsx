import React, { Component } from 'react';
import axios from 'axios'

const api = 'http://localhost:3001/article'

class Submit extends Component {
  state = {
    title: '',
    content: '',
  }
  handleTextAreaInput({ currentTarget: textarea }) { // 自动调整textArea的高度
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
  }
  handleChange = ({ target: input }) => {
    // console.log(e.currentTarget)
    const name = input.name
    const value = input.value
    this.setState({ [name]: value })
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const { id: userId } = this.props.userInfo
    const { title, content } = this.state
    const article = {title, content, userId}
    try {
      const { data } = await axios.post(api, article)
      console.log(data)
      alert('提交成功！')
      window.location = '/'
    } catch(e) {
      console.log(e.response)
    }
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
              <textarea
                onInput={(e) => this.handleTextAreaInput(e)}
                name="content"
                value={content}
                id="article-content"
                placeholder="请输入正文"
              />
            </label>
          </div>
          <button className="submit-button">发布文章</button>
        </form>
      </div>
    );
  }
}

export default Submit;