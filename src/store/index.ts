import useNav from './nav'

export default function useStore() {
  return {
    nav: useNav()
  }
}
