<script setup lang="ts">
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { onMounted, computed, watch } from 'vue'
import ArticleItems from '@/components/ArticleItems.vue'
import { useArticleStore } from '@/stores/Article'

const route = useRoute()
const router = useRouter()

const articleId = computed(() => Number(route.params.id))
const articlesStore = useArticleStore()

const article = computed(() => 
  articlesStore.getArticleById(articleId.value)
)

onMounted(async () => {
  await articlesStore.fetchArticles()
  if(!article.value) {
    await router.replace({ name:'not-found' })
  }
})
    
</script>

<template>
    <div
      v-if="article"
      class="w-screen flex justify-center items-center bg-gradient-to-bl from-gray-600 via-gray-400 to-slate-200"
    >
        <ArticleItems :article="article" />
    </div>
</template>