import { Routes } from '@angular/router';
import {MainViewComponent} from "./pages/main-view/main-view.component";
import {LikeFilmsComponent} from "./pages/like-films/like-films.component";
import {DatailFilmComponent} from "./pages/datail-film/datail-film.component";
import {PopularFilmComponent} from "./pages/popular-film/popular-film.component";

export const routes: Routes = [
  {path: '', component: MainViewComponent},
  {path: 'like', component: LikeFilmsComponent},
  {path: 'popular', component: PopularFilmComponent},
  {path: 'detail', component: DatailFilmComponent, outlet: 'detailRouters'}
  /*{path: 'detail/:id', component: DatailFilmComponent}*/
];
