import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {IFilm} from "../../film/IFilm";
import {AllFilmsService} from "../../film/all-films.service";

@Component({
  selector: 'app-datail-film',
  standalone: true,
  imports: [],
  templateUrl: './datail-film.component.html',
  styleUrl: './datail-film.component.css'
})
export class DatailFilmComponent implements OnInit{
   film!: IFilm ;
  constructor(private router: Router,
              private activRouters: ActivatedRoute,
              private allFilmServise : AllFilmsService) {

  }

  hideDetail() {
    this.router.navigate([{outlets: {detailRouters: null}}]);
  }

  ngOnInit(): void {
   this.activRouters.queryParams.subscribe(p =>
   {
     this.film = this.allFilmServise.getMovie(parseInt(p['id']));
     console.log(this.film);
   });
  }
}
