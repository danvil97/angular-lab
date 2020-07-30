import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pokemon, PokemonsService} from '../../services/pokemons.service'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  providers: [PokemonsService],
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {
  pokemon: Pokemon;
  @Output() onCapture: EventEmitter<Pokemon> = new EventEmitter<Pokemon>()

  constructor(private pokemonsService: PokemonsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getPokemon(this.route.snapshot.params.id);
  }


  getPokemon(id: number) {
    this.pokemon = this.pokemonsService.getById(id);
  }
}
