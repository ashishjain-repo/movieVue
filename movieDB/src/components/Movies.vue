<script setup>
import { onMounted, reactive, defineProps } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';
import { trimName } from '@/utils/main';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    endPoint: {
        type: String,
        required: true,
    },
    limit: Number,
});

const state = reactive({
    movies: [],
});

onMounted(async () => {
    const API_URL = "https://api.themoviedb.org/3/"
    const API_KEY = "96a295ed5e51ddb6255b1ba01f334994";
    try {
        const response = await axios.get(`${API_URL}${props.endPoint}?api_key=${API_KEY}&language=en-US`);
        state.movies = response.data.results;
        console.log(state.movies);
    }
    catch (error) {
        console.log("Error Fetching Request: ", error);
    }
});

</script>

<template>
    <section class="">
        <hr class="m-10">
        <h1 class="text-white text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold my-14">
            {{ title }}</h1>
        <div class="grid gap-1 px-4 sm:grid-cols-2 xs:px-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            <RouterLink
                class="mx-auto my-2 grid border py-4 px-3 text-center text-white bg-gradient-to-r from-blue-950 to-indigo-950 transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-gradient-to-r hover:from-blue-900 hover:to-indigo-900 active:bg-gradient-to-r active:from-green-800 active:to-lime-700"
                v-bind:to="'/movie/' + movie.id" v-for="movie in state.movies.slice(0, limit || state.movies.length)">
                <img :src="movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : '../assets/image/no-image.png'"
                    alt="" class="mx-auto object-contain max-w-56 md:max-w-64">
                <p class="text-sm sm:text-md md:text-lg py-1 font-semibold">{{ trimName(movie.title) }}</p>
                <p class="text-sm sm:text-md md:text-lg">Release: <span class="font-bold">{{ movie.release_date
                        }}</span></p>
            </RouterLink>
        </div>
        <hr class="m-10">
    </section>
</template>