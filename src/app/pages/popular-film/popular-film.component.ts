import {Component, OnInit} from '@angular/core';
import {MovieCardComponent} from "../../movie-card/movie-card/movie-card.component";
import {NgForOf} from "@angular/common";
import {IFilm} from "../../film/IFilm";
import {AllFilmsService} from "../../service/all-films.service";
import { Store } from '@ngrx/store';
import { populargMovies } from '../../store/actions';
import { selectPopylarMovies } from '../../store/selectors';

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

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(populargMovies());

    this.store.select(selectPopylarMovies).pipe().subscribe(
      m => {
        console.log(m + " --------Store all film");
        if(m !== null)
          this.movies = m;
      }
    );
  }

}
