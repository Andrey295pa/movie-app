import {Component, OnInit} from '@angular/core';
import {MovieCardComponent} from "../../movie-card/movie-card/movie-card.component";
import {NgForOf} from "@angular/common";
import {IFilm} from "../../film/IFilm";
import {AllFilmsService} from "../../service/all-films.service";

@Component({
  selector: 'app-top-level',
  standalone: true,
    imports: [
        MovieCardComponent,
        NgForOf
    ],
  templateUrl: './top-level.component.html',
  styleUrl: './top-level.component.scss'
})
export class TopLevelComponent implements  OnInit{
  public movies: Array<IFilm> = [];

  constructor(private allFilmService: AllFilmsService) {
  }

  ngOnInit(): void {
    this.allFilmService.getTopLevelMoviesFromApi()
      .subscribe(data => this.movies = data.results)
  }

}
