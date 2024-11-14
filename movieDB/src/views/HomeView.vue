<script setup>
import NavbarTop from '@/components/navbar/NavbarTop.vue';
import NavbarBottom from '@/components/navbar/NavbarBottom.vue';
import TopMovies from '@/components/home/TopMovies.vue';
import TopTvShows from '@/components/home/TopTvShows.vue';

</script>

<template>
    <body class="bg-gradient-to-r from-slate-900 to-slate-700">
        <NavbarTop />
        <main>
            <section class="text-center py-5">
            <h1 class="text-5xl xs:text-6xl sm:text-7xl lg:text-8xl text-white font-bold my-5 kanit-black">MovieDB</h1>
            <p class="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-white font-bold">Your Movie Guide</p>
            <hr class="m-10">
            </section>
            <TopMovies />
            <TopTvShows />
        </main>
        <NavbarBottom />
    </body>
</template>