import {Component, OnInit} from '@angular/core';
import {IFilm} from "../../film/IFilm";
import {AllFilmsService} from "../../service/all-films.service";
import {NgForOf} from "@angular/common";
import {MovieCardComponent} from "../../movie-card/movie-card/movie-card.component";

@Component({
  selector: 'app-upcomming',
  standalone: true,
  imports: [
    MovieCardComponent
  ],
  templateUrl: './upcomming.component.html',
  styleUrl: './upcomming.component.scss'
})
export class UpcommingComponent implements OnInit{
  public movies: Array<IFilm> = [];

  constructor(private allFilmService: AllFilmsService) {
  }

  ngOnInit(): void {
    this.allFilmService.getUpcomingMoviesFromApi()
      .subscribe(data => {
        this.movies = data.results
        console.log(data + " all data");
      });
  }
}
