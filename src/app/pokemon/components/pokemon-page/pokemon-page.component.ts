import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pokemon, PokemonsService} from '../../services/pokemons.service'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {
  pokemon: Pokemon;

  constructor(private pokemonsService: PokemonsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getPokemon(this.route.snapshot.params.id);
  }

  getPokemon(id: number): void {
    this.pokemon = this.pokemonsService.getById(id);
  }

  handleCapture(): void {
    this.pokemon.captured = !this.pokemon.captured
  }
}
