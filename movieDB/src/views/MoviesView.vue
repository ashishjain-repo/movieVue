<script setup>
import NavbarTop from '@/components/navbar/NavbarTop.vue';
import NavbarBottom from '@/components/navbar/NavbarBottom.vue';
import Movies from '@/components/Movies.vue';
document.title = 'MovieDB | Movies'
</script>

<template>
<body class="bg-gradient-to-r from-slate-900 to-slate-700">
        <NavbarTop />
        <main>
<Movies :title="'Trending Movies'" :endPoint="'movie/popular'"/>
        </main>
        <NavbarBottom />
</body>
</template>