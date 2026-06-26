<script setup lang="ts">
    import { useArticleStore } from '@/stores/Article';
    import { computed } from 'vue';
    import ArticleButton from './ArticleButton.vue';

    const articlesStore = useArticleStore()

    const articleCategories = computed(() => 
        [...new Set(articlesStore.articles.map(article => article.subject))]
    )
</script>

<template>
    <div 
        class="article-categories w-3/4 grid grid-cols-1 md:grid-cols-5 gap-2 px-4 lg:px-8 py-2 rounded bg-gray-200"
    >
        <ArticleButton
            varient="primary"
            :active="articlesStore.selectedCategory === 'همه موضوعات'"
            @click="articlesStore.setCategory('همه موضوعات')"
            text="همه موضوعات"
            class="hover:bg-orange-500"
        />

        <ArticleButton
            v-for="category in articleCategories"
            :key="category"
            :text="category"
            varient="primary"
            :active="articlesStore.selectedCategory === category"
            @click="articlesStore.setCategory(category)"
            class="hover:bg-orange-500"
        />
    </div>
</template>