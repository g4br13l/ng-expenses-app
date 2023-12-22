import {AfterViewChecked, AfterViewInit, Component, inject, Input, OnInit} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot, Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart,
  Router, RouterLink,
  RouterModule,
  RouterOutlet,
  RouterState, RouterStateSnapshot,
  ROUTES
} from '@angular/router';
import {TopMenuComponent} from "./shared/layout/top-menu/top-menu.component";
import {BottomMenuComponent} from "./shared/layout/bottom-menu/bottom-menu.component";
import {GroupListComponent} from "./modules/group/page/group-list/group-list.component";
import {routes} from "./app.routes";
import {BreadCrumbComponent} from "./shared/ui/bread-crumb/bread-crumb.component";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {LeftMenuComponent} from "./shared/layout/left-menu/left-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TopMenuComponent,
    BottomMenuComponent,
    GroupListComponent,
    BreadCrumbComponent,
    LeftMenuComponent,
  ],
  templateUrl: './app.component.html'
})


export class AppComponent implements OnInit, AfterViewInit {

  router = inject(Router);
  fullPath: any = '';
  protected showLoader = true;



  ngOnInit(): void {

    this.showHideLoader();
  }


  ngAfterViewInit(): void {
    try {
      let path = location.pathname.slice(1);
      this.fullPath = path[0]?.toUpperCase() + path.slice(1);
      console.log('location => ', location);
    }
    catch (e) {
      console.log('ngAfterViewChecked error => ', e);
    }
  }



  showHideLoader(): void {

    this.router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationStart) this.showLoader = true;
      else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError    ) this.showLoader = false;

    })
  }




}
