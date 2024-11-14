<script setup>
import {RouterLink, useRoute} from 'vue-router';

const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
};
</script>

<template>
    <nav class="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center align-middle text-center py-4 bg-black text-white shadow-sm shadow-slate-500">
        <div class="">
            <RouterLink to="/" class="text-3xl lg:text-4xl kanit-black">MovieDB</RouterLink>
        </div>
        <div class="hidden xs:flex"></div>
        <div class="hidden lg:flex"></div>
        <div class="hidden xl:flex"></div>
        <div class="flex justify-evenly gap-2 sm:gap-1 font-semibold lg:text-xl align-middle items-center">
            <RouterLink to="/" v-bind:class="[isActiveLink('/') ? 'text-amber-400':'text-white','hover:text-amber-400','transition-all','duration-200']">Home</RouterLink>
            <RouterLink to="/movies" v-bind:class="[isActiveLink('/movies') ? 'text-amber-400':'text-white','hover:text-amber-400','transition-all','duration-200']">Movies</RouterLink>
            <RouterLink to="/tv" v-bind:class="[isActiveLink('/tv') ? 'text-amber-400':'text-white','hover:text-amber-400','transition-all','duration-200']">TV</RouterLink>
        </div>
    </nav>
    <!-- FOr Router  border-2 border-gray-300 p-1 rounded-md bg-gray-700 -->
</template>