import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieState } from "./state";


export const selectState = createFeatureSelector<MovieState>('movieState');

export const selectMovies = createSelector(selectState, movieState => movieState.movies);

export const selectNowPlayingMovies = createSelector(selectState, movieState => movieState.nowPlayingMovies);
export const selectPopylarMovies = createSelector(selectState, movieState => movieState.popularFilm);
export const selectTopLevelMovies = createSelector(selectState, movieState => movieState.topLevelFilm);
export const selectUpcommingMovies = createSelector(selectState, movieState => movieState.upcomingFilm);

export const selectName = createSelector(selectState, movieState => {
    return {
        name: "MY NAME FROM SELECTOR TEST"
    };
}
);