import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AllFilmsService } from "../service/all-films.service";
import { loadMovies, loadMoviesFaild, loadAllMoviesSuccess, loadNowPlayingMoviesSucsess, loadNowPlayingMovies, populargMovies, popularMoviesSucsess, topLevelMovies, topLevelMoviesSucsess, upcommingMovies, upcommingMoviesSucsess } from "./actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class MovieEffect {

    constructor(private actions$: Actions,
        private allFilmsService: AllFilmsService
    ) {}

    loadMovies$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadMovies),
            mergeMap(() => {
                return this.allFilmsService.getAllMoviesFromApi().pipe(
                    map(movies => loadAllMoviesSuccess({movies: movies.results})),
                    catchError(error => 
                        of(loadMoviesFaild({error}))
                    )
                );
            })
           
        )

    );

    loadNowPlayingMovies$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadNowPlayingMovies),
            mergeMap(() => {
                return this.allFilmsService.getNowPlayingMoviesFromApi().pipe(
                    map(movies => loadNowPlayingMoviesSucsess({movies: movies.results})),
                    catchError(error => 
                        of(loadMoviesFaild({error}))
                    )
                );
            })
           
        )
    );

    //
    popularMovies$ = createEffect(() => 
        this.actions$.pipe(
            ofType(populargMovies),
            mergeMap(() => {
                return this.allFilmsService.getPopulargMoviesFromApi().pipe(
                    map(movies => popularMoviesSucsess({movies: movies.results})),
                    catchError(error => 
                        of(loadMoviesFaild({error}))
                    )
                );
            })
           
        )
    );

    topLevelMovies$ = createEffect(() => 
        this.actions$.pipe(
            ofType(topLevelMovies),
            mergeMap(() => {
                return this.allFilmsService.getTopLevelMoviesFromApi().pipe(
                    map(movies => topLevelMoviesSucsess({movies: movies.results})),
                    catchError(error => 
                        of(loadMoviesFaild({error}))
                    )
                );
            })
           
        )
    );

    upcommingMovies$ = createEffect(() => 
        this.actions$.pipe(
            ofType(upcommingMovies),
            mergeMap(() => {
                return this.allFilmsService.getUpcomingMoviesFromApi().pipe(
                    map(movies => upcommingMoviesSucsess({movies: movies.results})),
                    catchError(error => 
                        of(loadMoviesFaild({error}))
                    )
                );
            })
           
        )
    );



}