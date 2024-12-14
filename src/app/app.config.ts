import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth'; // Optional: Add services you need
import { provideFirestore, getFirestore } from '@angular/fire/firestore'; // Optional
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { provideFunctions, getFunctions } from '@angular/fire/functions';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()), // Optional
    provideFirestore(() => getFirestore()), // Optional
    provideFunctions(() => getFunctions()),
  ],
};
