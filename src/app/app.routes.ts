import { Routes } from '@angular/router';
import {MainViewComponent} from "./pages/main-view/main-view.component";
import {LikeFilmComponent} from "./pages/like-film/like-film.component";
import {PopularFilmComponent} from "./pages/popular-film/popular-film.component";
import {DatailFilmComponent} from "./pages/datail-film/datail-film.component";
import {NowPlainingComponent} from "./pages/now-plaining/now-plaining.component";
import {TopLevelComponent} from "./pages/top-level/top-level.component";
import {UpcommingComponent} from "./pages/upcomming/upcomming.component";

export const routes: Routes = [
  {path: '', component: MainViewComponent},
  {path: 'like', component: LikeFilmComponent},
  {path: 'now-plaing', component: NowPlainingComponent},
  {path: 'popular', component: PopularFilmComponent},
  {path: 'top-level', component: TopLevelComponent},
  {path: 'upcomming', component: UpcommingComponent},
  {path: 'detail/:id', component: DatailFilmComponent}
];
