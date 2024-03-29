import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, withFetch, provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeBuildComponent } from './poke-build/poke-build.component';
import { PokeService } from './poke.service';

@NgModule({
  declarations: [
    AppComponent,
    PokeBuildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokeService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
