import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const articleApi = 'http://localhost:3001/article/';

class Article extends Component {
  constructor() {
    super()
    const user = localStorage.getItem('user')
    let userInfo
    try {
      userInfo = JSON.parse(user) || { id: 0, name: '未登录' }
    } catch (e) {
      userInfo = { id: 0, name: '未登录' }
    }
    this.state = {
      article: {
        title: '加载中...',
        content: '加载中...',
        name: '加载中...',
        avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAgVBMVEX///8AAAD09PT+/v719fUEBAQBAQEEBAP7+/v4+Pifn58UFBSTk5Pv7+8MDAyQkJDDw8OEhIQ4ODhbW1uurq61tbV8fHxISEji4uLp6elnZ2c9PT3U1NR1dXUrKyscHBzc3NxUVFS8vLwjIyOlpaVPT08xMTEgICBlZWXV1dVGRkZ7NtVfAAAE20lEQVR4nO2b22KqOhBAGSBB5CJesCCoqK11n///wAMoyi0wpAz2oXkck1lTi2ElAUX5bU3L2htiv4SvzbKmTR77PXzTNBv96WPPz8ysaZPHfg9f1/VGf/pY5TO91l+nj5X5aqO/qlLHFK3gmy310vOLCSn7bbyFP7sXkP8269fLJPxHAbPZu/j3ArSsgDfw0xkxnxI1rTlfT8NPC1AeBbyH/7gnpAW8gZ/OiMU9qS4HE/H153VXn5om4avie8I0fHUkfrKxl0v7HP64Jim+tzvCox22weT8c8Sh1Ng6mZTv7I0KH7hhzSfke9cGnzF2CifjW218g1+d9/IBShUM5ps6lh8L+QArVZ6PdcLwIuYDrAfyJZywef2X+AD+EL6ME3rdfDg6tE7oHLr5ADtaJ5z38YEFpE646uMD31M6odfPN6yQ0AlP/XzGbDon1BmCzyI6Jzxj+AbTEXw5J9xi+BzO/fkknTBC8WHbn0+O/7oEOvkQIfMN5Ssxjg8WEV/xcXwAnYavzJF8SGj4ygLJh5iGryyRfPBo+HkBGH5WAIkTLpD89F9A44RzJB8SIif0kXxQiZwwRvItKid0XBSfR2ROGKH4xpbMCbcoPvPJnNBH8d2QzAlVhuCziM4JlROCz2w6J1Q8BN9SEfmk9wlXvXxjj8knvU/42ctnASaf9D7h7NDD57tB+Yby06uAd/OP5PtE++57sk/NV/RLF39Nzk/viZaYv1KH5xvaX9M9S8QvbxTS8VXVswj4+H3CNBZf2/inn/EHnR2bW17nW58abmw1WPAHnx17UYXP1gF+7Cv2o7Pj+4FFzr9uUfPvj52wHtOC/MjGDyTGKlJOOG7s7+z47+z47+xYaWsT8cc6Ox4thukfBLh+eXNsc2R+uGMfA/6uHRwX5oj8cO8CPH2z3M9czFrG5up8XDgj8e94gEOT5USw1hpjZ9f7ffpoj8I/Xwr1sOv9gmyZklZQG7t4esJ/QTPfQL6zfy3JrdqZ4L/7Ewy32tjAfXmSO8fyBU4YX8v+ua/k8KyHE92qeU9QXrt8heV8Q53Qdqtngkkpx4Y9nexWHutDde1knTv4PU7Y2BM6vXLYvOSEu9dY/bu+dmOfIn6fE+6a649zkWMLJb7BX5sCLWtHvpByQmfdsv5ZqXeLu1X52eVxbzFrW7vuJZww/Ghdf+Vfp/pR5xcVaFH72nntDHbCr/b137euKOG1yX9UINzP3g11QuFzCkslubTx89O60ELvnfU44Vy4J+r6Vjs/q+DWsXd0rvO7nNBzRfzO2Lqrn5WUGd1OmHxL8XtiB6fE73bCDwp+9nTHk9HthBsaPnDvyejkO5dhefGx60xpnxMrfH07NC8+JpiTq/wEtScvF3MDhJN80fHTH2o/P5bJi4/FvU62JuU37wl1fsCk8qJjbiDgF064pOUzwxbxH054IObzaxVc8AsnjGXz4mP/SvimEy6l86Jjyxe/xQlX0nnRsejFbzqhw6TzomNMffKbTujT8+HxpFe7Ey4n4N8vAoETfk3Ah5MidsLDBHw4dDhhurDmzDAMVssxaswVO2GYfsyyBtU2ciwUvneYzoP591XLMXYsFr536QHPWq3/6DFP+N6nPwmf+8L3bjeT8PlG+N7xZhI+37Tz0x9kMJ+kBSL+O957/x+lt4i2vxqzSwAAAABJRU5ErkJggg==',
        date: 12312323,
      },
      data: {
        id: userInfo.id,
        name: userInfo.name,
        avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAgVBMVEX///8AAAD09PT+/v719fUEBAQBAQEEBAP7+/v4+Pifn58UFBSTk5Pv7+8MDAyQkJDDw8OEhIQ4ODhbW1uurq61tbV8fHxISEji4uLp6elnZ2c9PT3U1NR1dXUrKyscHBzc3NxUVFS8vLwjIyOlpaVPT08xMTEgICBlZWXV1dVGRkZ7NtVfAAAE20lEQVR4nO2b22KqOhBAGSBB5CJesCCoqK11n///wAMoyi0wpAz2oXkck1lTi2ElAUX5bU3L2htiv4SvzbKmTR77PXzTNBv96WPPz8ysaZPHfg9f1/VGf/pY5TO91l+nj5X5aqO/qlLHFK3gmy310vOLCSn7bbyFP7sXkP8269fLJPxHAbPZu/j3ArSsgDfw0xkxnxI1rTlfT8NPC1AeBbyH/7gnpAW8gZ/OiMU9qS4HE/H153VXn5om4avie8I0fHUkfrKxl0v7HP64Jim+tzvCox22weT8c8Sh1Ng6mZTv7I0KH7hhzSfke9cGnzF2CifjW218g1+d9/IBShUM5ps6lh8L+QArVZ6PdcLwIuYDrAfyJZywef2X+AD+EL6ME3rdfDg6tE7oHLr5ADtaJ5z38YEFpE646uMD31M6odfPN6yQ0AlP/XzGbDon1BmCzyI6Jzxj+AbTEXw5J9xi+BzO/fkknTBC8WHbn0+O/7oEOvkQIfMN5Ssxjg8WEV/xcXwAnYavzJF8SGj4ygLJh5iGryyRfPBo+HkBGH5WAIkTLpD89F9A44RzJB8SIif0kXxQiZwwRvItKid0XBSfR2ROGKH4xpbMCbcoPvPJnNBH8d2QzAlVhuCziM4JlROCz2w6J1Q8BN9SEfmk9wlXvXxjj8knvU/42ctnASaf9D7h7NDD57tB+Yby06uAd/OP5PtE++57sk/NV/RLF39Nzk/viZaYv1KH5xvaX9M9S8QvbxTS8VXVswj4+H3CNBZf2/inn/EHnR2bW17nW58abmw1WPAHnx17UYXP1gF+7Cv2o7Pj+4FFzr9uUfPvj52wHtOC/MjGDyTGKlJOOG7s7+z47+z47+xYaWsT8cc6Ox4thukfBLh+eXNsc2R+uGMfA/6uHRwX5oj8cO8CPH2z3M9czFrG5up8XDgj8e94gEOT5USw1hpjZ9f7ffpoj8I/Xwr1sOv9gmyZklZQG7t4esJ/QTPfQL6zfy3JrdqZ4L/7Ewy32tjAfXmSO8fyBU4YX8v+ua/k8KyHE92qeU9QXrt8heV8Q53Qdqtngkkpx4Y9nexWHutDde1knTv4PU7Y2BM6vXLYvOSEu9dY/bu+dmOfIn6fE+6a649zkWMLJb7BX5sCLWtHvpByQmfdsv5ZqXeLu1X52eVxbzFrW7vuJZww/Ghdf+Vfp/pR5xcVaFH72nntDHbCr/b137euKOG1yX9UINzP3g11QuFzCkslubTx89O60ELvnfU44Vy4J+r6Vjs/q+DWsXd0rvO7nNBzRfzO2Lqrn5WUGd1OmHxL8XtiB6fE73bCDwp+9nTHk9HthBsaPnDvyejkO5dhefGx60xpnxMrfH07NC8+JpiTq/wEtScvF3MDhJN80fHTH2o/P5bJi4/FvU62JuU37wl1fsCk8qJjbiDgF064pOUzwxbxH054IObzaxVc8AsnjGXz4mP/SvimEy6l86Jjyxe/xQlX0nnRsejFbzqhw6TzomNMffKbTujT8+HxpFe7Ey4n4N8vAoETfk3Ah5MidsLDBHw4dDhhurDmzDAMVssxaswVO2GYfsyyBtU2ciwUvneYzoP591XLMXYsFr536QHPWq3/6DFP+N6nPwmf+8L3bjeT8PlG+N7xZhI+37Tz0x9kMJ+kBSL+O957/x+lt4i2vxqzSwAAAABJRU5ErkJggg==',
        comment: "",
      }
    }
  }
  async componentDidMount() {
    const { id } = this.props.match.params
    try {
      const { data } = await axios.get(`${articleApi}${id}`)
      const { article } = data
      this.setState({ article })
    } catch(e) {
      console.log(Object.entries(e))
      // console.log(e)
    }
  }
  handleChange({ target: input }) {
    console.log(input)
    const data = {...this.state.data}
    const { name, value } = input
    data[name] = value
    this.setState({ data })
  }
  handleTextAreaInput({ currentTarget: textarea }) { // 自动调整textArea的高度
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
  }
  render() {
    const { comment, name, avatar } = this.state.data
    const { title, content  } = this.state.article
    return (
      <div className="article-page">
        <article className="article module-card">
          <h1 className="title">{title}</h1>
          <p className="content">{content}</p>
        </article>
        <div className="comment module-card">
          <div className="comment-header flx">
            <div className="author-info flx">
              <div className="avatar">
                <img
                  src={avatar}
                  alt="头像"
                />
              </div>
              <div className="name">{name}</div>
            </div>
          </div>
          <form className="submit-comment" onChange={e => this.handleChange(e)}>
            <textarea
              className="textarea"
              onInput={(e) => this.handleTextAreaInput(e)}
              name="comment"
              value={comment}
              placeholder="请输入正文"
            />
          </form>
        </div>
      </div>
    )
  }
}

Article.propTypes = {

}

export default Article