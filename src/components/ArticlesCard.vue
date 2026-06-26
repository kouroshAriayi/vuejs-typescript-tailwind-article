<script setup lang="ts">
  import { useArticleStore } from '@/stores/Article';
  import ArticleButton from './ArticleButton.vue';
  const articlesStore = useArticleStore()
</script>
<template>
  <div class="article-category-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/4">
    <router-link
      :to="`/article/${article.id}`"
      v-for="article in articlesStore.filteredArticles"
      :key="article.id"
      class="card flex flex-col items-center justify-between cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg pb-2 rounded bg-white shadow overflow-hidden h-80"
    >
      <img :src="article.main_img" :alt="article.title" class="w-full h-1/2">
      <p class="line-clamp-4 text-sm px-1">{{ article.summary }}</p>
      <ArticleButton
        varient="primary"
        text="خواندن مقاله"
      />
    </router-link>
  </div>
</template>

<style scoped></style>
