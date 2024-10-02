import {NgModule, provideZoneChangeDetection} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
  provideHttpClient,
  withInterceptors
} from "@angular/common/http";
import {tokenInterceptorInterceptor} from "./interceptor/token-interceptor.interceptor";
import {provideRouter} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
      AuthModule,
      //HttpClientModule
    ],
  providers: [
    provideHttpClient(withInterceptors([tokenInterceptorInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
