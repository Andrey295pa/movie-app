import { Component } from '@angular/core';
import {IFilm} from "../../film/IFilm";
import {AllFilmsService} from "../../film/all-films.service";
import {MovieCardComponent} from "../../movie-card/movie-card.component";
import {NgForOf} from "@angular/common";
import {UserFilmsService} from "../../film/user-films.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    MovieCardComponent,
    NgForOf
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  movies: Array<IFilm> = [];
  favoriteFilms: number[] = [];
  likeFilms: string[] = [];

  constructor(private allFilmsService: AllFilmsService,
              private userFilmService: UserFilmsService,
              private router: Router) {
    this.movies = allFilmsService.getMovies();
  }

  public saveFavorite( idFilm: number) {
    this.favoriteFilms.unshift(idFilm);
  }

  saveLikeFilm(idFilm: number) {
  this.userFilmService.setLikeFilm(idFilm)

  }

  showDetailFilm(id: number) {
    //this.router.navigate(['detail', id])
    this.router.navigate([{outlets: {detailRouters: 'detail'}}],
      {queryParams: {id: id}});

  }
}
