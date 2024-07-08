import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {IFilm} from "../../film/IFilm";
import {MatTooltip} from "@angular/material/tooltip";
import {TitleSizePipe} from "../../pipe/title-size";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardSubtitle,
    MatCardActions,
    MatTooltip,
    TitleSizePipe,
    NgStyle
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent implements OnInit{
  @Input() public movie!: IFilm;
  @Output() favoriteFilm: EventEmitter<number> = new EventEmitter<number>();
  @Output() likeFilm: EventEmitter<IFilm> = new EventEmitter<IFilm>();
  @Output() detailFilmId: EventEmitter<number> = new EventEmitter<number>();
  imgPath = '';

  ngOnInit(): void {
    this.imgPath = `https://image.tmdb.org/t/p/w500${this.movie.backdrop_path}`;
  }
  public  addFavorite(value: number) {
    this.favoriteFilm.emit(value);
  }

  public addLikeFilm(value: IFilm) {
    this.likeFilm.emit(value);
  }

  showDetail(id: number) {
    this.detailFilmId.emit(id);
  }


}
