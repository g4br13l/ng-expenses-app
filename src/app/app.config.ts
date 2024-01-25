import {ApplicationConfig, ErrorHandler, importProvidersFrom, isDevMode, makeEnvironmentProviders} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  provideRouter, RouterLink,
  RouterModule, RouterOutlet, RouterState, RouterStateSnapshot,
  withComponentInputBinding, withRouterConfig
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {GroupService} from "./modules/group/data/group.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { provideServiceWorker, ServiceWorkerModule } from '@angular/service-worker';

import {env} from "../env/env";

import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {provideFirebaseApp, getApp, initializeApp} from "@angular/fire/app";
import {AppErrorHandler} from "./shared/providers/app-error-handler";
import {DatePipe} from "@angular/common";


export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter ( routes, withComponentInputBinding() ),
    provideAnimations(),

    { provide: HttpClient, useClass: HttpClient },
    { provide: GroupService, useClass: GroupService },
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: DatePipe, useClass: DatePipe },

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
