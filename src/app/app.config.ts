import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TranslateLoader, provideTranslateService } from '@ngx-translate/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideTranslateService({
      lang: localStorage.getItem('lang') || 'hr',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient, baseHref: string) => ({
          getTranslation: (lang: string) =>
            http.get(`${baseHref}i18n/${lang}.json`)
        }),
        deps: [HttpClient, APP_BASE_HREF]
      }
    })
  ]
};
