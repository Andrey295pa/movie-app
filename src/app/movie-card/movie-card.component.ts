import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IFilm} from "../film/IFilm";
import {MatCardModule} from "@angular/material/card";
import {TitleSizePipe} from "../pipe/title-size.pipe";
import {MatTooltip, TooltipComponent} from "@angular/material/tooltip";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [MatCardModule, TitleSizePipe, TooltipComponent, MatTooltip],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements  OnInit{

  //@Input() public moviesCollection!: Array<IFilm>;
  @Input() public movie!: IFilm;
  @Output() favoriteFilm: EventEmitter<number> = new EventEmitter<number>();
  @Output() likeFilm: EventEmitter<number> = new EventEmitter<number>();
  @Output() detailFilmId: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
   // this.movie = this.moviesCollection[this.index];
  }

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
