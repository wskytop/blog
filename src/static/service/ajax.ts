import { ElMessage } from 'element-plus'
import Ajax from './index'

export default new Ajax(
  {
    baseURL: 'http://localhost:3333',
    timeout: 30000, // 请求超时时间
    headers: {
      'content-type': 'application/json'
    }
  },
  (config: any) => {
    // config.headers['token'] = getStorageToken()
    return config
  },
  (response: any) => {
    const res = response.data
    if (res.code === '') {
      return res
    }
    if (res.code == 0) {
      return response.data
    }
    switch (res.code) {
      case 10001:
        if (!response.config.hideHint) {
          ElMessage.error(res.message)
        }
        break
      default:
        if (!response.config.hideHint) {
          ElMessage.error(res.message)
        }
        break
    }
    return response.data
  }
)
