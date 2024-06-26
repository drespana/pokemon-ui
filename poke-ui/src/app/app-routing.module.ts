import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeHomeComponent } from './poke-home/poke-home.component';
import { PokeDeckComponent } from './poke-deck/poke-deck.component';
import { PokeBuildComponent } from './poke-build/poke-build.component';

const routes: Routes = [
  { path: '', redirectTo: 'build', pathMatch:'full' },
  { path: 'home', component: PokeHomeComponent },
  { path: 'deck', component: PokeDeckComponent },
  { path: 'build', component: PokeBuildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
