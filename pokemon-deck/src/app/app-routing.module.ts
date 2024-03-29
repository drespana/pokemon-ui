import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeBuildComponent } from './poke-build/poke-build.component';

const routes: Routes = [
  { path: '', redirectTo: 'build', pathMatch:'full' },
  { path: 'build', component: PokeBuildComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
