import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <dl className="book-mark-nav">
            <dt>书签</dt>
            <dd><a href="https://www.moocbaba.com/">MOOC爸爸</a></dd>
            <dd><a href="https://www.wpshushu.com/">WP叔叔</a></dd>
            <dd><a href="https://www.hostmama.cc/">煮鸡妈妈</a></dd>
          </dl>
          <dl className="share">
            <dt>分享</dt>
            <dd><a href="#/1" title="分享到新浪微博">分享到新浪微博</a></dd>
            <dd><a href="#/2" title="分享到QQ空间">分享到QQ空间</a></dd>
            <dd><a href="#/3" title="分享到有道云笔记">分享到有道云笔记</a></dd>
            <dd><a href="#/4" title="分享到微信">分享到微信</a></dd>
          </dl>
        </div>
        <div className="brand">
          小南瓜
        </div>
      </footer>
    );
  }
}

export default Footer;