import { Component } from '@angular/core';
import {IFilm} from "../../film/IFilm";
import {AllFilmsService} from "../../service/all-films.service";
import {UserFilmsService} from "../../service/user-films.service";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

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
export class LikeFilmComponent {
  films: IFilm[];

  constructor(private allFilmsService: AllFilmsService,
              private userFilmSevice: UserFilmsService,
              private router: Router) {
    this.films = allFilmsService.getMovies().filter(m => userFilmSevice.getLikeFilm().includes(m.id));
  }

  goMainView() {
    this.router.navigateByUrl("");
  }
}
