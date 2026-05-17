import { Injectable } from '@angular/core';
import {IFilm} from "./IFilm";

@Injectable({
  providedIn: 'root'
})
export class AllFilmsService {
  movies: Array<IFilm> = [];
  constructor() {
    this.movies = this.initFilmsCollection();
  }

  public getMovies(): Array<IFilm> {
    return this.movies;
  }

  public getMovie(id: number): IFilm {
    let movie = this.movies.find(m => m.id === id);
    return  <IFilm>movie
  }
  private initFilmsCollection(): Array<IFilm> {
    let films  = [
      {id:0, backdrop_path: '', original_language: 'en', original_title: 'Kingdom of the Planet of the Apes', title: 'Kingdom',
        description: 'Several generations in the future following Caesar\'s reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will ' +
          'cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.', release_date: 'May 5, 2024', rating: 14},
      {id:1, backdrop_path: '', original_language: 'en', original_title: 'Civil War', title: 'Civil War',
        description: 'In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.', release_date: 'May 15, 2024',rating: 3 },
      {id:2, backdrop_path: '', original_language: 'en', original_title: 'Godzilla x Kong: The New Empire', title: 'Godzilla x Kong',
        description: 'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, ' +
          'challenging their very existence – and our own.', release_date: 'May 17, 2024', rating: 7},
      {id:3, backdrop_path: '', original_language: 'en', original_title: 'Kingdom of the Planet of the Apes', title: 'Kingdom',
        description: 'Several generations in the future following Caesar\'s reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will ' +
          'cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.', release_date: 'May 5, 2024', rating: 14},
      {id:4, backdrop_path: '', original_language: 'en', original_title: 'Civil War', title: 'Civil War',
        description: 'In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.', release_date: 'May 15, 2024',rating: 3 },
      {id:5, backdrop_path: '', original_language: 'en', original_title: 'Godzilla x Kong: The New Empire', title: 'Godzilla x Kong',
        description: 'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, ' +
          'challenging their very existence – and our own.', release_date: 'May 17, 2024', rating: 7},
      {id:6, backdrop_path: '', original_language: 'en', original_title: 'Kingdom of the Planet of the Apes', title: 'Kingdom',
        description: 'Several generations in the future following Caesar\'s reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will ' +
          'cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.', release_date: 'May 5, 2024', rating: 14},
      {id:7, backdrop_path: '', original_language: 'en', original_title: 'Civil War', title: 'Civil War',
        description: 'In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.', release_date: 'May 15, 2024',rating: 3 },
      {id:8, backdrop_path: '', original_language: 'en', original_title: 'Godzilla x Kong: The New Empire', title: 'Godzilla x Kong',
        description: 'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, ' +
          'challenging their very existence – and our own.', release_date: 'May 17, 2024', rating: 7},
      {id:9, backdrop_path: '', original_language: 'en', original_title: 'Tarot', title: '1234567890123',
        description: 'When a group of friends recklessly violate the sacred rule of Tarot readings, they unknowingly unleash an unspeakable evil trapped within the cursed cards. ' +
          'One by one, they come face to face with fate and end up in a race against death.', release_date: 'May 11, 2024', rating: 1}
    ]
    return films;
  }
}
