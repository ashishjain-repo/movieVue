<script setup>
import NavbarTop from '@/components/navbar/NavbarTop.vue';
import NavbarBottom from '@/components/navbar/NavbarBottom.vue';
import LatestTv from '@/components/latest/LatestTv.vue';
</script>

<template>
<body class="bg-gradient-to-r from-slate-900 to-slate-700">
        <NavbarTop />
        <main>
<LatestTv />
        </main>
        <NavbarBottom />
</body>
</template>