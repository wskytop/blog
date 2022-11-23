export const isMobile = () => {
  const domWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  return domWidth <= 750
}
// 格式化md
export const formatMd = (res: any) => {
  if (!res) {
    return ''
  }
  const description = res
    .replace(/\n/g, '') // 全局匹配换行
    .replace(/(\*\*|__)(.*?)(\*\*|__)/g, '') // 全局匹配内粗体
    .replace(/!\[[\s\S]*?\]\([\s\S]*?\)/g, '') // 全局匹配图片
    .replace(/\[[\s\S]*?\]\([\s\S]*?\)/g, '') // 全局匹配连接
    .replace(/<\/?.+?\/?>/g, '') // 全局匹配内html标签
    .replace(/(\*)(.*?)(\*)/g, '') // 全局匹配内联代码块
    .replace(/`{1,2}[^`](.*?)`{1,2}/g, '') // 全局匹配内联代码块
    .replace(/```([\s\S]*?)```[\s]*/g, '') // 全局匹配代码块
    .replace(/~~(.*?)~~/g, '') // 全局匹配删除线
    .replace(/[\s]*[0-9]+\.(.*)/g, '') // 全局匹配有序列表
    .replace(/(#+)(.*)/g, '') // 全局匹配标题
    .replace(/(>+)(.*)/g, '') // 全局匹配摘要
    .replace(/\r\n/g, '') // 全局匹配换行
    .replace(/\s/g, '') // 全局匹配空字符;
    .replace(/(?<=(---)).*?(?=(---))/, '')
    .replace(/[\s]*[-*+]/g, '') // 全局匹配无序列表
    .slice(0, 205)
  const str = res.replace(/[\r\n]/g, '').match(/(?<=(---)).*?(?=(---))/g)

  let data = {}
  if (str[0]) {
    const title = str[0].match(/(?<=(title(:|：))).*?(?=(date))/g)[0] || ''
    const date = str[0].match(/(?<=(date(:|：))).*?(?=(tags))/g)[0] || ''
    const tags =
      str[0].match(/(?<=(tags(:|：))).*?(?=(cover_picture))/g)[0] || ''
    const cover_picture = str[0].match(/(?<=(cover_picture(:|：))).*/g)[0] || ''
    data = {
      title,
      date,
      tags,
      cover_picture,
      description
    }
  }
  return data
}

export default {
  isMobile,
  formatMd
}
