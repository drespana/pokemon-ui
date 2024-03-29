import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap, of } from 'rxjs';
import Pokemon from './Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
  private pokemon$: Subject<Pokemon[]> = new Subject();
  constructor(private http:HttpClient) { }

  private refreshPokemon() {
    this.http.get<Pokemon[]>(this.url).subscribe((pokemon) => {
      this.pokemon$.next(pokemon);
    })
  }

  getPokemon(): Subject<Pokemon[]> {
    this.refreshPokemon();
    return this.pokemon$;
  }
}