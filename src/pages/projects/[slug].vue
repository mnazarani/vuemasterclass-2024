<template>
        <h1>Single Project - {{ route.params?.slug }}</h1>
        <RouterLink to="/">Home</RouterLink>
</template>
    
<script setup lang='ts'>

    const route = useRoute()
</script>
    
<style>
    
</style>