<script setup>
import axios from 'axios';
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const seriesId = route.params.id;

const state = reactive({
    series:[],
});

onMounted(async () => {
    const API_URL = "https://api.themoviedb.org/3/"
    const API_KEY = "96a295ed5e51ddb6255b1ba01f334994";
    try {
        const response = await axios.get(`${API_URL}tv/${seriesId}?api_key=${API_KEY}&language=en-US`);
        state.series = response.data;
        console.log(state.series);
        document.title = `MovieDB | ${state.series.name}`
    }
    catch (error) {
        console.log("Error Fetching Request: ", error);
    }
});

</script>

<template>
    <section class="grid lg:grid-cols-2 lg:my-2 relative">
        <img :src="'https://image.tmdb.org/t/p/original/'+state.series.backdrop_path" alt="" class="absolute -top-1 inset-0 w-screen h-screen object-cover opacity-5">
        <div>
            <img :src="state.series.poster_path ? 'https://image.tmdb.org/t/p/w500' + state.series.poster_path : '../../assets/image/no-image.png'" alt="" class="w-60 xs:w-72 sm:w-80 xl:w-96 my-5 mx-auto">
        </div>
        <div class="mx-2 grid gap-2 lg:gap-0">
            <p class="text-center text-2xl my-2 font-bold xs:text-3xl xl:text-5xl">{{ state.series.name }}</p>
            <p class="flex xs:text-lg"><svg class="size-4 my-auto" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512">
                <path fill="#FFD43B"
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg><span class="my-auto mx-1">{{state.series.vote_average}} / 10</span></p>
            <p class="xs:text-lg lg:text-xl">First Aired On: {{ state.series.first_air_date }}</p>
            <p class="xs:text-lg lg:text-xl">{{ state.series.overview }}</p>
            <div class="xs:text-lg lg:text-xl">
                <span class="font-bold lg:text-xl">Genres</span>
                <ul>
                    <li v-for="genre in state.series.genres">{{ genre.name }}</li>
                </ul>
            </div>
            <div class="grid align-middle justify-center items-center">
                <a v-if="state.series.homepage !== ''" target="_blank" v-bind:href="state.series.homepage"
                class="border w-52 text-center mx-auto my-2 py-2 rounded border-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-500 font-semibold lg:text-lg z-10">Visit
                Show Homepage</a>
                <a v-else target="_blank" v-bind:href="state.series.homepage"
                class="border w-52 text-center mx-auto my-2 py-2 rounded border-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-500 font-semibold lg:text-lg pointer-events-none">Visit
                Show Homepage</a>
            </div>
        </div>
        <div class="grid lg:col-span-2">
            <p class="text-center my-2 text-xl font-bold lg:text-2xl">TV SHOW INFO</p>
            <p class="ml-2 my-2 lg:my-4 xl:ml-4 xs:text-lg "><span class="text-amber-400">Number of Seasons:</span> {{ state.series.number_of_seasons }}</p>
            <hr class="opacity-35 mx-1">
            <p class="ml-2 my-2 lg:my-4 xl:ml-4 xs:text-lg "><span class="text-amber-400">Total Episodes:</span> {{ state.series.number_of_episodes }}
            </p>
            <hr class="opacity-35 mx-1">
            <p class="ml-2 my-2 lg:my-4 xl:ml-4 xs:text-lg "><span class="text-amber-400">Last Air Date:</span> {{ state.series.last_air_date }}
            </p>
            <hr class="opacity-35 mx-1">
            <p class="ml-2 my-2 lg:my-4 xl:ml-4 xs:text-lg "><span class="text-amber-400">Status:</span> {{ state.series.status }}</p>
            <hr class="opacity-35 mx-1">
            <p class="ml-2 font-semibold my-2 lg:my-4 xl:ml-4 xs:text-lg ">Production Companies</p>
            <ul class="ml-4 xl:ml-8">
                <li v-for="company in state.series.production_companies">{{ company.name }}</li>
            </ul>
        </div>
    </section>
</template>