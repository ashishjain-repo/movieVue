<script setup>
import NavbarTop from '@/components/navbar/NavbarTop.vue';
import NavbarBottom from '@/components/navbar/NavbarBottom.vue';
import TvShows from '@/components/TvShows.vue';
document.title = 'MovieDB | TV Shows'
</script>

<template>
<body class="bg-gradient-to-r from-slate-900 to-slate-700">
        <NavbarTop />
        <main>
<TvShows :title="'Trnding TV Shows'" :endPoint="'tv/popular'"/>
        </main>
        <NavbarBottom />
</body>
</template>