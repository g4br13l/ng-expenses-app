import {Component, computed, inject, signal, Signal} from '@angular/core';
import {BreadCrumbService} from "./bread-crumb.service";
import {NgForOf} from "@angular/common";
import {BreadCrumbI} from "./bread-crumb-i";
import {Event, NavigationStart, Router, RouterEvent, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './bread-crumb.component.html'
})


// TODO: Build a dynamic link for each <a> element in the template.

export class BreadCrumbComponent {

  private breadCrumbService = inject(BreadCrumbService);
  private router = inject(Router);

  protected path: Signal<string[]>;



  constructor() {

    this.path = this.breadCrumbService.getPathSig();

    this.router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationStart) {

      }
    });

  }

}
