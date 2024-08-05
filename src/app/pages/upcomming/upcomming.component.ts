import {Component, OnInit} from '@angular/core';
import {IFilm} from "../../film/IFilm";
import {MovieCardComponent} from "../../movie-card/movie-card/movie-card.component";
import { Store } from '@ngrx/store';
import { upcommingMovies } from '../../store/actions';
import { selectUpcommingMovies } from '../../store/selectors';

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

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(upcommingMovies());

    this.store.select(selectUpcommingMovies).pipe().subscribe(
      m => {
        if(m !== null)
          this.movies = m;
      }
    );
}

}
