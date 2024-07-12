import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {IFilm} from "../film/IFilm";

@Injectable({
  providedIn: 'root'
})
export class UserFilmsService {
  public likeFilms$ : BehaviorSubject<IFilm[]> =  new BehaviorSubject<IFilm[]>([]);

}
