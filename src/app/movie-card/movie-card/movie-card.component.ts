import {Component, Input, Output, EventEmitter} from '@angular/core';
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
    TitleSizePipe
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() public movie!: IFilm;
  @Output() favoriteFilm: EventEmitter<number> = new EventEmitter<number>();
  @Output() likeFilm: EventEmitter<number> = new EventEmitter<number>();
  @Output() detailFilmId: EventEmitter<number> = new EventEmitter<number>();

  public  addFavorite(value: number) {
    this.favoriteFilm.emit(value);
  }

  public addLikeFilm(value: number) {
    this.likeFilm.emit(value);
  }

  showDetail(id: number) {
    this.detailFilmId.emit(id);
  }
}
