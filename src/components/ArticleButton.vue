<script setup lang="ts">
import type { ButtonVarient } from '@/types';
import { computed } from 'vue';

    const emit = defineEmits<{
        click:[]
    }>()

    const props = withDefaults(defineProps<Props>(), {
        varient: 'primary',
        active: false
    })

    interface Props {
        varient?: ButtonVarient
        text: string
        active?: boolean
    }

    const varientClasses = {
        primary: 'bg-blue-500',
        secondary: 'bg-gray-500',
        danger: 'bg-red-500',
        success: 'bg-green-500'
    }

    const buttonClass = computed(() => {
        if (props.active) {
            return 'bg-orange-400 hover:bg-orange-500'
        }
        return varientClasses[props.varient]
    })
</script>

<template>
    <button 
        class="p-1 md:p-2 rounded hover:shadow-lg transition duration-300 text-sm md:text-xl lg:text-2xl text-white cursor-pointer"
        :class="buttonClass"
        @click="emit('click')"
    >
        {{ text }}
    </button>
</template>