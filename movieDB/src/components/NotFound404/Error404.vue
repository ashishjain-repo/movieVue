<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="grid my-20 sm:my-40 lg:my-60">
        <h1 class="m-auto text-5xl xs:text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">404</h1>
        <h2 class="m-auto">Page Not Found</h2>
    </div>
    <div class="grid my-20 sm:my-40 lg:my-60">
        <RouterLink :to="'/'" class="m-auto border border-amber-400 rounded p-2 font-semibold hover:bg-amber-400 hover:text-black transition-all duration-300">Back To Homepage</RouterLink>
    </div>
</template>