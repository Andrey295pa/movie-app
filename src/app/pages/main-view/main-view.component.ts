import { Component } from '@angular/core';
import {MovieCardComponent} from "../../movie-card/movie-card/movie-card.component";
import {IFilm} from "../../film/IFilm";
import {AllFilmsService} from "../../service/all-films.service";
import {UserFilmsService} from "../../service/user-films.service";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";
import {MatTab, MatTabChangeEvent, MatTabGroup, MatTabLabel} from "@angular/material/tabs";

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    MovieCardComponent,
    NgForOf,
    MatTabGroup,
    MatTab,
    MatTabLabel
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
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
    this.router.navigate(['detail', id])
  }

  tabChange(tabChange: MatTabChangeEvent) {
    if (tabChange.index === 0) {
      this.router.navigateByUrl('');
    } else if (tabChange.index === 1) {
      this.router.navigateByUrl('/like');
    }
  }
}
