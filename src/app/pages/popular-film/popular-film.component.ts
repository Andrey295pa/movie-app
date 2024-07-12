import {Component, OnInit} from '@angular/core';
import {MovieCardComponent} from "../../movie-card/movie-card/movie-card.component";
import {NgForOf} from "@angular/common";
import {IFilm} from "../../film/IFilm";
import {AllFilmsService} from "../../service/all-films.service";

@Component({
  selector: 'app-popular-film',
  standalone: true,
    imports: [
        MovieCardComponent,
        NgForOf
    ],
  templateUrl: './popular-film.component.html',
  styleUrl: './popular-film.component.scss'
})
export class PopularFilmComponent implements  OnInit{
  public movies: Array<IFilm> = [];

  constructor(private allFilmService: AllFilmsService) {
  }

  ngOnInit(): void {
    this.allFilmService.getPopulargMoviesFromApi()
      .subscribe(data => this.movies = data.results)
  }


}
