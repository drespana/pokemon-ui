import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, withFetch, provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeHomeComponent } from './poke-home/poke-home.component';
import { PokeDeckComponent } from './poke-deck/poke-deck.component';
import { PokeBuildComponent } from './poke-build/poke-build.component';
import { PokeService } from './poke.service';
import { PokeNavigationComponent } from './poke-navigation/poke-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeHomeComponent,
    PokeDeckComponent,
    PokeBuildComponent,
    PokeNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    PokeService,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
