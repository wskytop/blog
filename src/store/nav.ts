import { defineStore } from 'pinia'

export default defineStore('nav', {
  state: () => {
    return {
      search: false,
      tags: false,
      searchContent: '',
      tagsContent: ''
    }
  },
  actions: {
    updateSearch() {
      this.search = !this.search
    },
    updateTags() {
      this.tags = !this.tags
    }
  }
})
