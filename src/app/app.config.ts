import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
//import { provideAuth, getAuth } from '@angular/fire/auth'; // Optional: Add services you need
import { routes } from './app.routes';
// import { environment } from '../environments/environment';
// import { provideFunctions, getFunctions } from '@angular/fire/functions';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAuth(() => getAuth()), // Optional
    // provideFirestore(() => getFirestore()), // Optional
    // provideFunctions(() => getFunctions()),
  ],
};
