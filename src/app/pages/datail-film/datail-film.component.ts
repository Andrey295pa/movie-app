import {Component, OnInit} from '@angular/core';
import {IFilm} from "../../film/IFilm";
import {ActivatedRoute, Router} from "@angular/router";
import {AllFilmsService} from "../../service/all-films.service";

@Component({
  selector: 'app-datail-film',
  standalone: true,
  imports: [],
  templateUrl: './datail-film.component.html',
  styleUrl: './datail-film.component.scss'
})
export class DatailFilmComponent implements OnInit{
  film!: IFilm ;
  constructor(private router: Router,
              private activRouters: ActivatedRoute,
              private allFilmServise : AllFilmsService) {
  }

  ngOnInit(): void {
    this.activRouters.params.subscribe(p =>
    {
      this.film = this.allFilmServise.getMovie(parseInt(p['id']));
      console.log(this.film);
    });
  }

  goMainView() {
    this.router.navigateByUrl("");
  }
}
