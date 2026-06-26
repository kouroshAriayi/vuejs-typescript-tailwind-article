<script setup lang="ts">
  import ArticleCategoriesList from '@/components/ArticleCategoriesList.vue';
  import ArticlesCard from '@/components/ArticlesCard.vue';
  import { useArticleStore } from '@/stores/Article';
  import { onMounted, ref } from 'vue';

  const articlesStore = useArticleStore()

  const loading = ref(true)
  const error = ref(false)

  onMounted(async () => {
    try{
        await articlesStore.fetchArticles()
    }catch{
        error.value = true
    }finally{
        loading.value = false
    }
  })
</script>

<template>

  <div v-if="loading" class="w-screen h-screen flex justify-center items-center">
    <h1 class="w-full text-center font-bold text-3xl">در حال بارگزاری...</h1>
  </div>

  <div v-if="error" class="w-screen h-screen flex justify-center items-center">
    <h1 class="w-full text-center font-bold text-3xl">یه مشکلی پیش آمده است...</h1>
  </div>
  
  <div v-if="!loading && !error" class="aricle-container w-screen min-h-screen flex flex-col justify-center items-center space-y-8 bg-gradient-to-bl from-gray-600 via-gray-400 to-slate-200 py-8">
    <h1 class="text-2xl md:text-4xl text-orange-400 mb-8">مقالات</h1>
    <ArticleCategoriesList />
    <ArticlesCard />
  </div>
</template>
