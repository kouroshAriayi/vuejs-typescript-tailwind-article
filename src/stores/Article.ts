import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { ArticleSubject, Article } from '@/types'
import api from '@/api/axios'

export const useArticleStore = defineStore('article', () => {
  const articles = ref<Article[]>([])
  const selectedCategory = ref<ArticleSubject | 'همه موضوعات'>('همه موضوعات')

  async function fetchArticles(force = false) {
    if (!force && articles.value.length) return
    try {
      const { data } = await api.get("/articles")
      articles.value = data
    } catch(error) {
      console.error(error)
      throw error
    }
  }

  function getArticleById(id: number) {
    return articles.value.find(article => Number(article.id) === id)
  }

  function setCategory(category: ArticleSubject | 'همه موضوعات') {
    selectedCategory.value = category
  }

  const filteredArticles = computed(() => {
    if(selectedCategory.value === 'همه موضوعات') {
      return articles.value
    }

    return articles.value.filter(article => article.subject === selectedCategory.value)
  })

  return { articles, fetchArticles, filteredArticles, setCategory, getArticleById, selectedCategory }
})
