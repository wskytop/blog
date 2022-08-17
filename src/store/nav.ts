import { defineStore } from 'pinia'

export default defineStore("nav", {
  state: () => {
    return {
      search: false,
      tags: false
    }
  },
  actions: {
    updateSearch(search: boolean) {
      this.search = !search
    },
    updateTags(tags: boolean) {
      this.tags = !tags
    }
  }
})