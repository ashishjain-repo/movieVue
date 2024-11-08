<script setup>
import NavbarTop from '@/components/NavbarTop.vue';
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { env } from 'process';

const API_KEY = import.meta.env.VITE_API_KEY;
const END_POINT = 'movie/popular';

const state = reactive({
    movies:[],
});

onMounted(async () => {
    try
    {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`);
        state.movies = response.data.results;
    }
    catch(error)
    {
        console.error(`Unable to fetch movie request due to: ${error}`);
    }
});
</script>

<template>
    <NavbarTop />

    <div v-for="movie in state.movies" :key="movie.id" :movie="movie">
        <p>{{ movie['original_title'] }}</p>
    </div>
</template>
