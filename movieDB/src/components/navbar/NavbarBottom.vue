<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center align-middle text-center py-4 bg-black text-white shadow-sm shadow-slate-500 mt-4">
        <div class="flex justify-evenly gap-2 sm:gap-1 font-semibold lg:text-xl">
            <a href="https://www.themoviedb.org/?language=en-US" class="hover:text-amber-400 transition-all duration-200">TMBD</a>
            <a href="https://github.com/ashishjain-repo" class="hover:text-amber-400 transition-all duration-200">Github</a>
            <a href="https://www.linkedin.com/in/ashishjain1008/" class="hover:text-amber-400 transition-all duration-200">LinkedIn</a>
        </div>
        <div class="hidden xs:flex"></div>
        <div class="hidden xl:flex"></div>
        <div class="hidden lg:flex"></div>
        <div class="">
            <RouterLink :to="'/'" class="text-3xl lg:text-4xl kanit-black">MovieDB</RouterLink>
        </div>
    </nav>
</template>