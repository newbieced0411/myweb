<template>
    <HomeView class="scroll-smooth"/>
</template>

<script setup>
import HomeView from '@/views/HomeView.vue' 
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600;700&display=swap');
html {
    scroll-behavior: smooth;
}

body {
    background-color: #111111;
    color: #ADADAD;
    font-family: 'Roboto Mono', monospace;
}
</style>
