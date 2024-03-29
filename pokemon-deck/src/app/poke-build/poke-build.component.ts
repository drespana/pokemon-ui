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
  @Input() initialState: BehaviorSubject<Pokemon> = new BehaviorSubject({});
  pokemons$: Observable<Pokemon[]> = new Observable();

  constructor(
    private pokemonService: PokeService
  ){}
  ngOnInit(): void {
    
    this.fetchPokemon();
  }

  private fetchPokemon(): void {
    let pokemonData = this.pokemonService.getPokemon();
    this.pokemons$ = pokemonData;
    console.log(this.pokemons$)
  }
}
