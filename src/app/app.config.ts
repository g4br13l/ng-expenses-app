import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  provideRouter, RouterLink,
  RouterModule, RouterOutlet, RouterState, RouterStateSnapshot,
  withComponentInputBinding, withRouterConfig
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {GroupService} from "./modules/group/group.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { provideServiceWorker, ServiceWorkerModule } from '@angular/service-worker';
import {AngularFireModule} from "@angular/fire/compat";

export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter (
      routes,
      withComponentInputBinding()
    ),
    provideAnimations(),

    { provide: HttpClient, useClass: HttpClient },
    { provide: GroupService, useClass: GroupService },

    importProvidersFrom (
      HttpClientModule,
      ServiceWorkerModule,
      /*ServiceWorkerContainer*/
      AngularFireModule.initializeApp({
        apiKey: "AIzaSyBKY1S2nKr00p6capmt6_MLTLjkcu69TFY",
        authDomain: "expenses-app-6300d.firebaseapp.com",
        databaseURL: "https://expenses-app-6300d-default-rtdb.firebaseio.com",
        projectId: "expenses-app-6300d",
        storageBucket: "expenses-app-6300d.appspot.com",
        messagingSenderId: "789528484957",
        appId: "1:789528484957:web:ffb9ff793b65042fd081b4"
      })
    ),

    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
  ]

};
