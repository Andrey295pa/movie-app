import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavContainer, MatSidenav, MatSidenavContent, MatListItem, MatNavList, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movie-app';
}
