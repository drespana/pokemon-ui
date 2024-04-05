import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeService } from '../poke.service';
import Pokemon from '../Pokemon'

@Component({
  selector: 'poke-build',
  templateUrl: './poke-build.component.html',
  styleUrl: './poke-build.component.css'
})
export class PokeBuildComponent implements OnInit {
  pokemons: any[] = [];
  pokemon:any 

  constructor(
    private pokemonService: PokeService
  ){}
  ngOnInit() {

    this.fetchPokemons();
    this.getPokemon();
  }

  fetchPokemons(): void{
    this.pokemons = this.pokemonService.getPokemons()
  }

  getPokemon(){
    this.pokemon = this.pokemonService.getPokemon()
  }
}
