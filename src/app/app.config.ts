// src/app/app.config.ts

import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './core/store/index_reducers'; // Import centralized reducers
import { AppEffects } from './core/store/index_effects'; // Import centralized effects

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      StoreModule.forRoot(
        reducers,
        {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          },
        }
      ),
      EffectsModule.forRoot(AppEffects),
      StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: false // Set to false since environment is not defined
      })
    ),
  ],
};
