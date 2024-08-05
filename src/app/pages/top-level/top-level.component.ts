import {Component, OnInit} from '@angular/core';
import {MovieCardComponent} from "../../movie-card/movie-card/movie-card.component";
import {NgForOf} from "@angular/common";
import {IFilm} from "../../film/IFilm";
import {AllFilmsService} from "../../service/all-films.service";
import { Store } from '@ngrx/store';
import { topLevelMovies } from '../../store/actions';
import { selectTopLevelMovies } from '../../store/selectors';

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

  constructor(private store: Store) {
  }

  ngOnInit(): void {
   this.store.dispatch(topLevelMovies());

   this.store.select(selectTopLevelMovies).pipe().subscribe(
    m => {
      if(m !== null)
        this.movies = m;
    }
  );
  }

}
