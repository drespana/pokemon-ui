import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap, of, map } from 'rxjs';
import Pokemon from './Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  private allPokemons: Object[] = [];
  private pokemonPic: Object[] = [];

  constructor(private http:HttpClient) { }

  private refreshPokemon() {
    this.http.get(this.url).subscribe((pokemons:any) => {
      pokemons.results.forEach((pokemon:any)=>{
        this.allPokemons.push(pokemon)
    })})
  }

  getPokemons() {
    this.refreshPokemon();
    return this.allPokemons
  }

  getPokemon(){
    this.http.get(this.url).subscribe((pokemons:any) => {
      pokemons.results.forEach((pokemon:any)=>{
         this.http.get(pokemon.url).subscribe((pokeInfo:any)=>{
          return this.pokemonPic = pokeInfo.sprites.front_default
          //this.http.get(pokeInfo.sprites.front_default).subscribe((pokeimg:any)=>{
            //this.pokemonPic = pokeimg
            // console.log(this.pokemonPic)
          //})
      })
    })})
  }

}
