import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, withFetch, provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module'; 
import { PokeHomeComponent } from './poke-home/poke-home.component';
import { PokeDeckComponent } from './poke-deck/poke-deck.component';
import { PokeBuildComponent } from './poke-build/poke-build.component';
import { PokeService } from './poke.service';
import { PokeNavigationComponent } from './poke-navigation/poke-navigation.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PokeCardComponent } from './poke-card/poke-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeHomeComponent,
    PokeDeckComponent,
    PokeBuildComponent,
    PokeNavigationComponent,
    PokeCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    provideClientHydration(),
    PokeService,
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
