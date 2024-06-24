import {Component} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MovieCardComponent} from "./movie-card/movie-card.component";
import {PrettyTitlePipe} from "./pipe/pretty-title.pipe";
import {NgForOf} from "@angular/common";
import {MatGridList, MatGridTile, MatGridTileText} from "@angular/material/grid-list";
import {MatList, MatListItem, MatNavList} from "@angular/material/list";
import {MatTab, MatTabBody, MatTabChangeEvent, MatTabGroup, MatTabHeader, MatTabLabel} from "@angular/material/tabs";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieCardComponent, PrettyTitlePipe, NgForOf, MatGridList,
    MatGridTileText, MatGridTile, MatList, MatListItem, MatTabGroup,
    MatTab, MatTabLabel, MatTabHeader, MatTabBody, MatNavList, MatSidenavContainer, MatSidenav, MatSidenavContent, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) {
  }
  tabChange(tabChange: MatTabChangeEvent) {

    if (tabChange.index === 0) {
      this.router.navigateByUrl('');
    } else if (tabChange.index === 1) {
      this.router.navigateByUrl('/like');
    }

  }
}
