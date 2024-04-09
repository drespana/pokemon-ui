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
  private pokemonInfo: Object[] = [];

  constructor(private http:HttpClient) { }

  private refreshPokemons() {
    this.http.get(this.url).subscribe((pokemons:any) => {
      pokemons.results.forEach((pokemon:any)=>{
        this.allPokemons.push(pokemon)
    })})
  }

  getPokemons() {
    this.refreshPokemons();
    return this.allPokemons
  }

  getPokemon(url:string){
    return this.http.get(url)
  }

}
