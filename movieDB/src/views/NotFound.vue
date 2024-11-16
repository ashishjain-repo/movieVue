<script setup>
import NavbarTop from '@/components/navbar/NavbarTop.vue';
import NavbarBottom from '@/components/navbar/NavbarBottom.vue';
import Error404 from '@/components/NotFound404/Error404.vue';

</script>

<template>
<body class="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
    <NavbarTop />
    <main>
        <Error404 />
    </main>
    <NavbarBottom />
</body>
</template>