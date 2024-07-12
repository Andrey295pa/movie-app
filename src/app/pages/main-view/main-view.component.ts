import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieCardComponent} from "../../movie-card/movie-card/movie-card.component";
import {IFilm} from "../../film/IFilm";
import {AllFilmsService} from "../../service/all-films.service";
import {UserFilmsService} from "../../service/user-films.service";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";
import {MatTab, MatTabChangeEvent, MatTabGroup, MatTabLabel} from "@angular/material/tabs";
import {Subscription} from "rxjs";

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
export class MainViewComponent implements OnInit, OnDestroy {
  public movies: Array<IFilm> = [];
  public watchFilms: number[] = [];
  public likeFilms: IFilm[] = [];
  private _filmsSubscription!: Subscription;

  constructor(private allFilmsService: AllFilmsService,
              private userFilmService: UserFilmsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.allFilmsService.getAllMoviesFromApi().subscribe(data => {
      this.movies = data.results;
      console.log(data.results);
    });
    this._filmsSubscription = this.userFilmService.likeFilms$.subscribe(value => this.likeFilms = value);
  }

  ngOnDestroy(): void {
    this._filmsSubscription?.unsubscribe();
  }

  public saveWatcesFilm(idFilm: number) {
    this.watchFilms.unshift(idFilm);
  }

  saveLikeFilm(film: IFilm) {
    if(this.likeFilms.indexOf(film) < 0) {
      const newArr: IFilm[] = this.likeFilms;
      newArr.push(film);
      this.userFilmService.likeFilms$.next(newArr)
    }
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
