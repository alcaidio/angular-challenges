import { appRoutes } from '@angular-challenges/module-to-standalone/shell';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)],
};
