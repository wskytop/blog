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
import { formatMd } from '../utils/tools'
export default [
  {
    id: 1,
    title: '计算机网络',
    date: '2022-03-01 17:00:00',
    tags: 'HTTP',
    categories: '面经',
    content: article_1
  },
  {
    id: 2,
    title: '浏览器原理',
    date: '2022-03-02 17:00:00',
    tags: '浏览器',
    categories: '面经',
    content: article_2
  },
  {
    id: 3,
    title: 'HTML 和 CSS 面试题',
    date: '2022-03-03 17:00:00',
    tags: 'HTML,CSS',
    categories: '面经',
    content: article_3
  },
  {
    id: 4,
    title: 'JavaScript面试题',
    date: '2022-03-03 17:00:00',
    tags: 'JavaScript',
    categories: '面经',
    content: article_4
  },
  {
    id: 5,
    title: 'vue面试题',
    date: '2022-03-03 17:00:00',
    tags: 'vue',
    categories: '面经',
    content: article_5
  },
  {
    id: 6,
    title: 'git常用命令',
    date: '2022-03-03 17:00:00',
    tags: 'git',
    categories: '面经',
    content: article_6
  },
  {
    id: 7,
    title: 'Vue3 新特性',
    date: '2022-03-02 17:00:00',
    tags: 'Vue',
    categories: 'note',
    content: article_7
  },
  {
    id: 8,
    title: 'vue2面试题',
    date: '2022-03-03 17:00:00',
    tags: 'vue',
    categories: '面经',
    content: article_8
  },
  {
    id: 9,
    title: 'js手撕代码',
    date: '2022-03-03 17:00:00',
    tags: 'JavaScript',
    categories: '面经',
    content: article_9
  },
  {
    id: 10,
    title: 'listNode',
    date: '2022-03-03 17:00:00',
    tags: 'code',
    categories: '面经',
    content: article_10
  },
  {
    id: 11,
    title: 'promise手撕代码',
    date: '2022-03-03 17:00:00',
    tags: 'JavaScript',
    categories: '面经',
    content: article_11
  },
  {
    id: 12,
    title: 'webpack面试题',
    date: '2022-03-03 17:00:00',
    tags: 'webpack',
    categories: '面经',
    content: article_12
  }
].map((i) => {
  return {
    ...i,
    description: formatMd(i.content)
  }
})
