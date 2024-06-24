
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainViewComponent} from "./pages/main-view/main-view.component";
import {LikeFilmsComponent} from "./pages/like-films/like-films.component";

const routers: Routes = [
  {path: '', component: MainViewComponent},
  {path: 'like', component: LikeFilmsComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
