<template>
     <h1>Projects</h1>  
     <RouterLink :to="{ name: '/'}" >Home</RouterLink> <br>

     <RouterLink :to="{ name: '/projects/[id]', params: { 'id': 1}}">Go to project 1</RouterLink>
</template>
    
<script setup lang='ts'>
    
</script>
    
<style>
    
</style>