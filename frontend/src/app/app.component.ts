import { Component } from '@angular/core';

declare function sidebarSelector(): void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GRO';
  userName = 'Rafael';
  perfilUser = 'Admin';
  notification: boolean = true;
  mail: boolean = true;
  collapseNavigation: boolean = false;

  currentClass: Record<string, boolean> = {};

  constructor() {}

  ngOnInit(): void {
    sidebarSelector();
  }

  collapse() {
    this.collapseNavigation = !this.collapseNavigation;
  }

  logout() {}
}
