import { onMounted, onUnmounted, ref } from 'vue'
import tools from '../utils/tools'

export const useHandler = () => {
  const isMobile = ref(tools.isMobile())
  const onResize = () => {
    isMobile.value = tools.isMobile()
  }

  onMounted(() => {
    window.addEventListener('resize', onResize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })

  return {
    isMobile
  }
}
