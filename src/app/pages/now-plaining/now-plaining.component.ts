import {Component, OnInit} from '@angular/core';
import {MovieCardComponent} from "../../movie-card/movie-card/movie-card.component";
import {NgForOf} from "@angular/common";
import {IFilm} from "../../film/IFilm";
import {AllFilmsService} from "../../service/all-films.service";

@Component({
  selector: 'app-now-plaining',
  standalone: true,
    imports: [
        MovieCardComponent,
        NgForOf
    ],
  templateUrl: './now-plaining.component.html',
  styleUrl: './now-plaining.component.scss'
})
export class NowPlainingComponent implements OnInit{
  public movies: Array<IFilm> = [];

  constructor(private allFilmService: AllFilmsService) {
  }

  ngOnInit(): void {
    this.allFilmService.getNowPlayingMoviesFromApi()
      .subscribe(data => this.movies = data.results)
  }

}
