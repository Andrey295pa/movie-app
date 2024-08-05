import { createReducer, on } from "@ngrx/store"
import { initMovieState } from "./state"
import { loadMoviesFaild, loadAllMoviesSuccess, loadNowPlayingMoviesSucsess, popularMoviesSucsess, topLevelMoviesSucsess, upcommingMoviesSucsess } from "./actions"
import { state } from "@angular/animations";

export const MovieReduser = createReducer (
    initMovieState,

    on(loadAllMoviesSuccess, (state, {movies}) => {
        return {
            ...state,
            movies: movies
        };
    }),

    on(loadNowPlayingMoviesSucsess, (state, {movies}) => {
        return {
            ...state,
            nowPlayingMovies: movies
        }
    }),

    on(popularMoviesSucsess, (state, {movies}) => {
        return {
            ...state,
            popularFilm: movies
        }
    }),

    on(topLevelMoviesSucsess, (state, {movies}) => {
        return {
            ...state,
            topLevelFilm: movies
        }
    }),

    on(upcommingMoviesSucsess, (state, {movies}) => {
        return {
            ...state,
            upcomingFilm: movies
        }
    }),


    on(loadMoviesFaild, (state, {error}) => {
        return {
            ...state,
            movies: null,
            error: error
        };
    })

)