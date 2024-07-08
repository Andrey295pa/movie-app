import {Component, OnDestroy, OnInit} from '@angular/core';
import {IFilm} from "../../film/IFilm";
import {AllFilmsService} from "../../service/all-films.service";
import {UserFilmsService} from "../../service/user-films.service";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-like-film',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './like-film.component.html',
  styleUrl: './like-film.component.scss'
})
export class LikeFilmComponent implements OnDestroy, OnInit {
  private _filmsSubscription!: Subscription;
  public films: IFilm[] = [];
  public imgPath = "https://image.tmdb.org/t/p/w500";

  constructor(private allFilmsService: AllFilmsService,
              private userFilmService: UserFilmsService,
              private router: Router) {
  }

  ngOnDestroy(): void {
    this._filmsSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this._filmsSubscription = this.userFilmService.likeFilms$.subscribe(value => this.films = value);
  }

  goMainView() {
    this.router.navigateByUrl("");
  }

}
