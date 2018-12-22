# 从基本功能到逐渐丰富的论坛

开局一个div，内容全靠编。我清楚初学者走到独立做出一个项目有多难，如果你也处于这个十分痛苦的阶段，你可以跟着我这个项目的git commit来学习！
全站使用rem布局 双端都可以看

## 项目预览

### 首页文章列表 发表文章  

<img src="https://raw.githubusercontent.com/Qpumpkin/bbs-front-end/master/%E9%A1%B9%E7%9B%AE%E6%88%AA%E5%9B%BE/github%E6%88%AA%E5%9B%BE.jpg" width="350"/><img src="https://github.com/Qpumpkin/bbs-front-end/blob/master/%E9%A1%B9%E7%9B%AE%E6%88%AA%E5%9B%BE/github%E6%88%AA%E5%9B%BE2.jpg" width="300"/>

### 具体文章页面
<img src="https://raw.githubusercontent.com/Qpumpkin/bbs-front-end/master/%E9%A1%B9%E7%9B%AE%E6%88%AA%E5%9B%BE/github%E6%88%AA%E5%9B%BE3.jpg" width="300"/>

### 登录/注册弹窗
<img src="https://raw.githubusercontent.com/Qpumpkin/bbs-front-end/master/%E9%A1%B9%E7%9B%AE%E6%88%AA%E5%9B%BE/github%E6%88%AA%E5%9B%BE4.jpg" width="300" /><img src="https://raw.githubusercontent.com/Qpumpkin/bbs-front-end/master/%E9%A1%B9%E7%9B%AE%E6%88%AA%E5%9B%BE/github%E6%88%AA%E5%9B%BE5.jpg" width="300" />

## commit - 想法记录

- 2018/12/21 01点17分
> 今天添加了article组件，在主页中也添加了路由，在和后端对接的时候发现了一些问题，开始有意识地优化css。SQLITE语句好麻烦啊。不知道以后用多了会不会记下来，可能做业务都用不到吧。

- 2018/12/23 00点05分
> 今天添加了文章登录模块，另外呢为了让css复用性高一点，还给整个项目的css重构了一下，整个网站的基本功能看起来像是一回事了，虽然整个网站基本的访问体验都有很多严重的问题，但现在就应该该去埋头继续添加这些东西吗？目前整站的代码都透着一股野鸡味 ①mask可进一步封装 ②form要组件化 ③用户信息明文储存在localStorage ③任何与后端交互后端也是自己独立一把梭的，都是未经过任何安全性的处理。由于整站都“开局一个div内容全靠编”，稍微繁琐一点都让人实在没有继续写下去的欲望。虽然脑中有很多抽象组件的设想，但是真动手写起来并不是那么容易，底层的东西总是这样繁琐。我想这一步无论谁来走都是很艰难。但不跨过去的话永远都是code monkey吧！

**我预计用这个项目来体现我本人的 前端/程序设计 能力。**
> 设想：连同react-router-dom axios 全部自己独立封装，除react框架外整站100%都是自己手敲的代码。写到完成度一半后再看看it浪人推荐的那本关于single page的书了[IT浪人](https://www.itlr.cc/page/638/)
---
1. 昨夜西风凋碧树，独上高楼，望尽天涯路。: 从一个软件的使用者变为生产者，写一点什么东西立马就有反馈，充满了好奇，晚上会畅想自己将来的职业发展，对自己充满信心觉得肯定能学好。
2. 衣带渐宽终不悔，为伊消得人憔悴。
 - **step1:** 开始出现很多自己不能直接理解的东西，会花时间精力去验证自己的想法。在搞懂闭包，css盒子模型或者一些其他关于程序的概念后沾沾自喜，觉得不过如此。不愿再花心思去练习，以掌握所谓的"原理"为傲不愿多写已经知道的东西。但面对即将要继续学的茫茫无尽的知识点心里时不时有一丝怀疑，还能这样持续下去吗？
 - **step2:** 果然你的担心是对的，后续越来越多的知识点让你倍感压力，面对各种概念虽然都能说出一二，但是敲起代码来总是捉襟见肘，还经常会因为遗忘了某些知识点、算法而感到沮丧，更要命的是学了这么久好像也做不出来什么。
 - **step3:** 面对接连不断所谓的新东西，感到焦虑痛苦，怀疑是不是选错了道路，难道做这个一辈子都要像这样过下去吗？自己是不是已经走到穷途末路了？

3. 众里寻他千百度，慕然回首，那人却在灯火阑珊处。：在某个夜晚焦虑地写代码时突然想开了，虽然不可能水平瞬间就有什么本质的变化。不过不会再去纠结要去理解什么概念，默写个什么算法、掌握什么所谓的原理了。
