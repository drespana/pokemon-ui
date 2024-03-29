import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeService } from '../poke.service';
import { BehaviorSubject } from 'rxjs';
import Pokemon from '../Pokemon';

@Component({
  selector: 'poke-build',
  templateUrl: './poke-build.component.html',
  styleUrl: './poke-build.component.css'
})
export class PokeBuildComponent implements OnInit {
  @Input() initialState: BehaviorSubject<any> = new BehaviorSubject({});
  pokemons: any[] = [];
  pokemons$: Observable<any[]> = new Observable();

  constructor(
    private pokemonService: PokeService
  ){}
  ngOnInit() {

    this.fetchPokemon();
    console.log(this.pokemons)
  }

  fetchPokemon(): void{
    this.pokemons$ = this.pokemonService.getPokemon();
    this.pokemons$.subscribe(pokemon => {
      console.log(pokemon)
      this.pokemons = pokemon
    })
  }
}
