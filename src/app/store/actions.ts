import { createAction, props } from "@ngrx/store";
import { IFilm, IModelData } from "../film/IFilm";

export const loadMovies = createAction('[Movie] Load Movies');

export const loadAllMoviesSuccess = createAction('[Movie] Load All Movies Succsees',
    props<{movies: IFilm[] | null}>()
);

export const loadMoviesFaild = createAction('[Movie] Load movie faild',
    props<{error: any | null}>()
);

export const loadNowPlayingMovies = createAction('[Movie] Load Now Playing Movies');

export const loadNowPlayingMoviesSucsess = createAction('[Movie] Load Now playing  Movies Succsees',
    props<{movies: IFilm[] | null}>()
);

export const populargMovies = createAction('[Movie] Load Now Playing Movies');

export const popularMoviesSucsess = createAction('[Movie] Load Now playing  Movies Succsees',
    props<{movies: IFilm[] | null}>()
);

export const topLevelMovies = createAction('[Movie] Load Now Playing Movies');

export const topLevelMoviesSucsess = createAction('[Movie] Load Now playing  Movies Succsees',
    props<{movies: IFilm[] | null}>()
);

export const upcommingMovies = createAction('[Movie] Load Now Playing Movies');

export const upcommingMoviesSucsess = createAction('[Movie] Load Now playing  Movies Succsees',
    props<{movies: IFilm[] | null}>()
);