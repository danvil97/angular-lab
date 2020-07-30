import {Component, OnInit} from '@angular/core';
import {Pokemon, PokemonsService} from "../../services/pokemons.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  providers: [PokemonsService],
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {
  pokemon: Pokemon;

  constructor(private pokemonsService: PokemonsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getPokemon(this.route.snapshot.params.id);
  }

  getPokemon(id: number) {
    this.pokemon = this.pokemonsService.getById(id);
  }
}
