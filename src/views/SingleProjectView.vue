<template>
        <h1>Single Project - {{ route.params?.id }}</h1>
        <RouterLink to="/">Home</RouterLink>
</template>
    
<script setup lang='ts'>
    import { useRoute } from 'vue-router';

    const route = useRoute()
</script>
    
<style>
    
</style>