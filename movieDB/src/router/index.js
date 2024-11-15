import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import MoviesView from "@/views/MoviesView.vue";
import TvShowView from "@/views/TvShowView.vue";
import MovieDetailView from "@/views/MovieDetailView.vue";
import TvDetailView from "@/views/TvDetailView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/movies',
            name: 'movies',
            component: MoviesView,
        },
        {
            path: '/tv',
            name: 'tv-shows',
            component: TvShowView,
        },
        {
            path: '/movie/:id',
            name: 'movie-detail',
            component: MovieDetailView,
        },
        {
            path: '/tv-show/:id',
            name: 'tv-detail',
            component: TvDetailView,
        }
    ]
});

export default router;