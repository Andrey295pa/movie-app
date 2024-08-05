import { IFilm } from "../film/IFilm";

export interface MovieState {
    movies: IFilm[] | null;
    nowPlayingMovies: IFilm[] | null;
    popularFilm: IFilm[] | null;
    topLevelFilm: IFilm[] | null;
    upcomingFilm: IFilm[] | null;
    selectedMovie: IFilm | null; 
    name: string | null;
}

export const initMovieState: MovieState = {
    movies: null,
    nowPlayingMovies: null,
    popularFilm: null,
    topLevelFilm:  null,
    upcomingFilm:  null,
    selectedMovie: null,
    name: null

}