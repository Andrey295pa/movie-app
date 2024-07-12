import { Injectable } from '@angular/core';
import {IFilm, IModelData} from "../film/IFilm";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
    return this.httpClient.get<IFilm>(`${this.baseApiUrl}/${id}${this.apiKey}`);

  }
  public getAllMoviesFromApi(): Observable<IModelData> {
    return this.httpClient.get<IModelData>(`${this.baseApiUrl}/popular${this.apiKey}`);
  }

  public getNowPlayingMoviesFromApi(): Observable<IModelData> {
    return this.httpClient.get<IModelData>(`${this.baseApiUrl}/now_playing${this.apiKey}`);
  }

  public getPopulargMoviesFromApi(): Observable<IModelData> {
    return this.httpClient.get<IModelData>(`${this.baseApiUrl}/popular${this.apiKey}`);
  }

  public getTopLevelMoviesFromApi(): Observable<IModelData> {
    return this.httpClient.get<IModelData>(`${this.baseApiUrl}/popular${this.apiKey}`);
  }

  public getUpcomingMoviesFromApi(): Observable<IModelData> {
    return this.httpClient.get<IModelData>(`${this.baseApiUrl}/upcoming${this.apiKey}`);
  }
}
