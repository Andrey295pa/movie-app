import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IFilm} from "../film/IFilm";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements  OnInit{

  @Input() public moviesCollection!: Array<IFilm>;
  @Output() favoriteFilm: EventEmitter<string> = new EventEmitter<string>();
  @Output() likeFilm: EventEmitter<string> = new EventEmitter<string>();
  public movie!: IFilm;
  private index: number = 0;

  ngOnInit(): void {
    this.movie = this.moviesCollection[this.index];
  }

  public  addFavorite(value: string) {
    this.favoriteFilm.emit(value);
  }

  public addLikeFilm(value: string) {
    this.likeFilm.emit(value);
  }

  nextFilm() {
    if(this.index < this.moviesCollection.length - 1) {
      console.log(this.index);
      this.index++;
      this.movie = this.moviesCollection[this.index];
    }
  }


}
