<script setup>
import NavbarTop from '@/components/navbar/NavbarTop.vue';
import NavbarBottom from '@/components/navbar/NavbarBottom.vue';
import LatestMovies from '@/components/latest/LatestMovies.vue';
</script>

<template>
<body class="bg-gradient-to-r from-slate-900 to-slate-700">
        <NavbarTop />
        <main>
<LatestMovies />
        </main>
        <NavbarBottom />
</body>
</template>