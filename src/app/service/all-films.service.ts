import { Injectable } from '@angular/core';
import {IFilm, IModelData} from "../film/IFilm";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, EMPTY, map, Observable, of, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AllFilmsService {
  movies: Array<IFilm> = [];
  apiKey  = '?api_key=df138d88ccd7b426a6eb912b3a478e16';
  apiTocken  = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjEzOGQ4OGNjZDdiNDI2YTZlYjkxMmIzYTQ3OGUxNiIsIm5iZiI6MTcyMDEwOTQyNi4yNDc4NzgsInN1YiI6IjY2ODZjNWZjZjA5NTMwOTBjOTFhNmUzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bzi82zUSbZ6HVmFn_iOh_Wvx8Wdsj_QQGh3wJ2r279k';
  baseApiUrl = 'https://api.themoviedb.org/3/movie';
  constructor(private httpClient: HttpClient) {
  }

  public getMovieApiById(id: number): Observable<IFilm> {

    return this.httpClient.get<IFilm>(`${this.baseApiUrl}/${id}${this.apiKey}`)
    .pipe(
      retry(3),
      catchError((er: HttpErrorResponse) => {
        console.log(`Error ${JSON.stringify(er)}`);
        return EMPTY;
      })
    );

  }
  public getAllMoviesFromApi(): Observable<IModelData> {
    return this.httpClient.get<IModelData>(`${this.baseApiUrl}/popular${this.apiKey}`)
    .pipe(
      retry(3),
      catchError((er: HttpErrorResponse) => {
        console.log(`Error ${JSON.stringify(er)}`);
        return EMPTY;
      })
    );
  }

  public getNowPlayingMoviesFromApi(): Observable<IModelData> {
    return this.httpClient.get<IModelData>(`${this.baseApiUrl}/now_playing${this.apiKey}`)
    .pipe(
      retry(3),
      catchError((er: HttpErrorResponse) => {
        console.log(`Error ${JSON.stringify(er)}`);
        return EMPTY;
      })
    );
  }

  public getPopulargMoviesFromApi(): Observable<IModelData> {
    return this.httpClient.get<IModelData>(`${this.baseApiUrl}/popular${this.apiKey}`)
    .pipe(
      retry(3),
      catchError((er: HttpErrorResponse) => {
        console.log(`Error ${JSON.stringify(er)}`);
        return EMPTY;
      })
    );
  }

  public getTopLevelMoviesFromApi(): Observable<IModelData> {
    return this.httpClient.get<IModelData>(`${this.baseApiUrl}/top_rated${this.apiKey}`)
    .pipe(
      retry(3),
      catchError((er: HttpErrorResponse) => {
        console.log(`Error ${JSON.stringify(er)}`);
        return EMPTY;
      })
    );
  }

  public getUpcomingMoviesFromApi(): Observable<IModelData> {
    return this.httpClient.get<IModelData>(`${this.baseApiUrl}/upcoming${this.apiKey}`)
    .pipe(
      retry(3),
      catchError((er: HttpErrorResponse) => {
        console.log(`Error ${JSON.stringify(er)}`);
        return EMPTY;
      })
    );
  }
}
