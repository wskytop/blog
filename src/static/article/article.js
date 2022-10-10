import article_1 from '../../md/1.计算机网络.md?raw'
import article_2 from '../../md/2.浏览器.md?raw'
import article_3 from '../../md/3.HTML&&CSS.md?raw'
import article_4 from '../../md/4.JavaScript.md?raw'
import article_5 from '../../md/5.vue.md?raw'
import article_6 from '../../md/6.git.md?raw'
import article_7 from '../../md/7.vue3.md?raw'
import article_8 from '../../md/8.vue2.md?raw'
import article_9 from '../../md/9.js手撕代码.md?raw'
import article_10 from '../../md/10.listNode.md?raw'
import article_11 from '../../md/11.promise.md?raw'
import article_12 from '../../md/12.webpack.md?raw'

export default [
  {
    title: '计算机网络',
    date: '2022-03-01 17:00:00',
    tags: 'HTTP',
    categories: '面经',
    content:article_1,
    description:'1、HTTP 的基本概念 http: 是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP），用于从 WWW 服务器传输超文本到本地浏览器的超文本传输协议。'
  },
  {
    title: '浏览器原理',
    date: '2022-03-02 17:00:00',
    tags: '浏览器',
    categories: '面经',
    content:article_2,
    description:'1、从输入URL到页面加载的全过程 浏览器地址栏输入 URL 并回车 浏览器查找当前 URL 是否存在缓存，并比较缓存是否过期 DNS 解析 URL 对应的 IP 根据 IP 建立 TCP 连接（三次握手） 发送 http 请求'
  },
  {
    title: 'HTML 和 CSS 面试题',
    date: '2022-03-03 17:00:00',
    tags: 'HTML,CSS',
    categories: '面经',
    content:article_3
  },
  {
    title: 'Vue3 新特性',
    date: '2022-03-02 17:00:00',
    tags: 'Vue',
    categories: 'note',
    content:article_7,
    description:'Vue3快速上手 1.Vue3简介 2020年9月18日，Vue.js发布3.0版本，代号：One Piece（海贼王） 耗时2年多、2600+次提交、30+个RFC、600+次PR、99位贡献者 github上的tags地址：https://github.com/vuejs/vue-next/releases/tag/v3.0.0 2.Vue3带来了什么'
  }
]

