<script setup>
import NavbarTop from '@/components/navbar/NavbarTop.vue';
import NavbarBottom from '@/components/navbar/NavbarBottom.vue';
import MovieDetail from '@/components/detail/MovieDetail.vue';

</script>

<template>
<body class="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
<NavbarTop />
    <main>
        <MovieDetail />
    </main>
    <NavbarBottom />
</body>
</template>