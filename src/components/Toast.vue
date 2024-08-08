<script setup>
import {useToaststore} from '@/stores/toast'

const store = useToaststore()
</script>

<template>
    <div
        v-if="store.isVisible"
        class="transition ease-in-out delay-500 duration-500 px-6 py-6 fixed top-full right-8 rounded-x1 shadow-x1"
        :class="store.classes"
    >
        {{ store.message }}  
    </div>
</template>