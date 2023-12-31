import {ApplicationConfig, importProvidersFrom, isDevMode, makeEnvironmentProviders} from '@angular/core';
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

import {env} from "../env/env";

import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {provideFirebaseApp, getApp, initializeApp} from "@angular/fire/app";



export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter ( routes, withComponentInputBinding() ),
    provideAnimations(),

    { provide: HttpClient, useClass: HttpClient },
    { provide: GroupService, useClass: GroupService },

    importProvidersFrom (
      HttpClientModule,
      ServiceWorkerModule,
      provideFirebaseApp(() => initializeApp(env.firebase)),
      provideFirestore(() => getFirestore())
    ),

    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
  ]

};
