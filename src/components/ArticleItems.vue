<script setup lang="ts">
    import type { Article } from '@/types';

    defineProps<{
        article: Article
    }>()
</script>

<template>
    <div
        class="flex flex-col justify-center items-center space-y-4 w-3/4 md:w-2/3 bg-white shadow-lg px-2 py-2 md:px-4 my-2"
    >
        <h1 class="text-2xl md:text-3xl font-bold text-center">{{ article.title }}</h1>
        <div v-for="(block, index) in article.content" :key="index" class="flex justify-center w-full">
            <p v-if="block.type === 'paragraph'" class="text-sm w-full">
            {{ block.text }}
            </p>

            <img 
                v-if="block.type === 'image-sm'" 
                :src="block.url" class="w-[200px] md:w-[300px] h-auto" 
                :alt="article.title" 
            />

            <img 
                v-if="block.type === 'image-lg'" 
                :src="block.url" class="w-full h-auto" 
                :alt="article.title" 
            />

            <h2 
                v-if="block.type === 'title'" 
                class="w-full text-xl md:text-2xl font-bold text-center"
            >
                {{ block.text }}
            </h2>
            <h3 
                v-if="block.type === 'sub-title'" 
                class="w-full text-lg md:text-xl font-bold text-right"
            >
                {{ block.text }}
            </h3>

            <ul v-if="block.type === 'list'" class="w-full list-disc pr-6">
            <li v-for="(item, index) in block.items" :key="index">
                {{ item }}
            </li>
            </ul>
        </div>

        <span>
            منبع:
            <a 
            :href="article.source" 
            target="_blank"
            rel="noopener noreferrer"
            class="underline decoration-dashed text-blue-400"
            >
            {{ article.author }}
            </a>
        </span>
    </div>
</template>