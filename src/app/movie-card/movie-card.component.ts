import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IFilm} from "../film/IFilm";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements  OnInit{

  @Input() public movie!: IFilm;
  @Output() favoriteFilm: EventEmitter<string> = new EventEmitter<string>();
  @Output() likeFilm: EventEmitter<string> = new EventEmitter<string>();
 

  ngOnInit(): void {
    
  }

  public  addFavorite(value: string) {
    this.favoriteFilm.emit(value);
  }

  public addLikeFilm(value: string) {
    this.likeFilm.emit(value);
  }

}
