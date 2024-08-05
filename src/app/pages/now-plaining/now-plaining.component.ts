import {Component, OnInit} from '@angular/core';
import {MovieCardComponent} from "../../movie-card/movie-card/movie-card.component";
import {NgForOf} from "@angular/common";
import {IFilm} from "../../film/IFilm";
import {AllFilmsService} from "../../service/all-films.service";
import { Store } from '@ngrx/store';
import { loadNowPlayingMovies } from '../../store/actions';
import { selectNowPlayingMovies } from '../../store/selectors';

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

  constructor(private store: Store) {
  }

  ngOnInit(): void {

    this.store.dispatch(loadNowPlayingMovies());

    this.store.select(selectNowPlayingMovies).pipe().subscribe(
      m => {
        if(m !== null) {
          this.movies = m;
        }
      }
    );
  }

}
