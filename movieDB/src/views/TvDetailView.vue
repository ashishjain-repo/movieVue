<script setup>
import NavbarTop from '@/components/navbar/NavbarTop.vue';
import NavbarBottom from '@/components/navbar/NavbarBottom.vue';
import TvDetail from '@/components/detail/TvDetail.vue';

</script>

<template>
<body class="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
<NavbarTop />
    <main>
        <TvDetail />
    </main>
    <NavbarBottom />
</body>
</template>