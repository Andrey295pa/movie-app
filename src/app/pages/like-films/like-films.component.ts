import { Component } from '@angular/core';
import {IFilm} from "../../film/IFilm";
import {AllFilmsService} from "../../film/all-films.service";
import {UserFilmsService} from "../../film/user-films.service";
import {PrettyTitlePipe} from "../../pipe/pretty-title.pipe";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-like-films',
  standalone: true,
  imports: [PrettyTitlePipe, NgForOf],
  templateUrl: './like-films.component.html',
  styleUrl: './like-films.component.css'
})
export class LikeFilmsComponent {
  films: IFilm[];

  constructor(private allFilmsService: AllFilmsService,
              private userFilmSevice: UserFilmsService) {
    this.films = allFilmsService.getMovies().filter(m => userFilmSevice.getLikeFilm().includes(m.id));
    console.log(this.films);
  }

}
