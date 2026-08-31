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
  imgPath = "";
  constructor(private router: Router,
              private activRouters: ActivatedRoute,
              private allFilmServise : AllFilmsService) {
  }

  ngOnInit(): void {
    let idFilm!: number;

    this.activRouters.params.subscribe(p =>
    {
      idFilm = parseInt(p['id']);
    });

    this.allFilmServise.getMovieApiById(idFilm).subscribe(m => {
      this.film = m;
      this.imgPath = `https://image.tmdb.org/t/p/w500${m.backdrop_path}`;
    } );
  }

  goMainView() {
    this.router.navigateByUrl("");
  }
}
