import { Observable } from 'rxjs';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PokeService } from '../poke.service';
import Pokemon from '../Pokemon';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.css',
})
export class PokeCardComponent implements OnInit {
  pokemons: any[] = [];
  pokemonData: any;

  constructor(private pokemonService: PokeService, private http: HttpClient) {}
  ngOnInit() {
    this.fetchPokemons();

    // Get all images
    this.pokemons.forEach((poks) => {
      this.http.get(poks.url).subscribe((poksInfo:any) => {
        poks.pokeImg = poksInfo.sprites.front_default;
      });
    });
  }

  fetchPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }
}
