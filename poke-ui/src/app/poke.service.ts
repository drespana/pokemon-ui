import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap, of,map } from 'rxjs';
import Pokemon from './Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  private allPokemons: Object[] = [];

  constructor(private http:HttpClient) { }

  private refreshPokemon() {
   this.http.get(this.url).subscribe((pokemons:any) => this.allPokemons = pokemons.results)
  }

  getPokemons(): any[] {
    this.refreshPokemon();
    return this.allPokemons
  }

}
