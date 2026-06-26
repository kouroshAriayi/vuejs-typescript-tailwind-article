<script setup lang="ts">
    import ArticleButton from '@/components/ArticleButton.vue';
    import router from '@/router';

    function clickHandler() {
        router.push('/')
    }
</script>

<template>
    <div class="not-found w-screen h-screen flex justify-center items-center bg-gradient-to-bl from-gray-600 via-gray-400 to-slate-200">
        <div class="flex flex-col justify-center items-center">
            <h1 class="font-bold text-2xl md:text-3xl text-white mb-8">وارد صفحه اشتباهی شده اید!!!</h1>
            <ArticleButton
                @click="clickHandler"
                text="رفتن به صفحه اصلی"
                varient="primary"
                class="hover:bg-blue-600"
            />
        </div>
    </div>
</template>