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

let id = 0
const articles = [
  {
    content: article_1
  },
  {
    content: article_2
  },
  {
    content: article_3
  },
  {
    content: article_4
  },
  {
    content: article_5
  },
  {
    content: article_6
  },
  {
    content: article_7
  },
  {
    content: article_8
  },
  {
    content: article_9
  },
  {
    content: article_10
  },
  {
    content: article_11
  },
  {
    content: article_12
  }
].map((i) => {
  const data = formatMd(i.content)
  const index = i.content.indexOf('---', 10)
  i.content = i.content.substring(index + 3)
  id += 1
  return {
    ...i,
    ...data,
    id
  }
})
export default articles
