import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFilmsService {
  watcheFilmId: number[] = [];
  likeFilmId: number[] = [];
  constructor() { }

  public  setLikeFilm(id:number): void {
    this.likeFilmId.unshift(id);
    console.log(this.likeFilmId + "!!!!!!!!!!!!!!!!!!!!!");
  }

  public  setWatchFilm(id:number): void {
    this.likeFilmId.unshift(id);

  }

  public getLikeFilm(): number[] {
    return this.likeFilmId;
  }

  public getWatchFilm(): number[] {
    return this.watcheFilmId;
  }
}
