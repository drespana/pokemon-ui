import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PokeService } from '../poke.service';
import Pokemon from '../Pokemon'

@Component({
  selector: 'poke-build',
  templateUrl: './poke-build.component.html',
  styleUrl: './poke-build.component.css'
})
export class PokeBuildComponent implements OnInit {
  pokemons: any[] = [];
  pokemonData:any;

  constructor(
    private pokemonService: PokeService,
    private http: HttpClient,
  ){}
  ngOnInit() {

    this.fetchPokemons();
  }

  fetchPokemons(): void{
    this.pokemons = this.pokemonService.getPokemons()
    this.pokemons.forEach((pokemon)=>{
      this.http.get(pokemon.url).subscribe((pokemonInfo)=>{
        this.pokemonData = pokemonInfo;
      })
    })
  }


}
