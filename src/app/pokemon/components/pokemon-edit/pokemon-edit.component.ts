import {Component, OnInit} from '@angular/core';
import {Pokemon, PokemonsService} from "../../services/pokemons.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {
  pokemon: Pokemon;
  pokemonForm: FormGroup;

  constructor(private pokemonsService: PokemonsService, private route: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getPokemon(this.route.snapshot.params.id);
    this.pokemonForm = this.fb.group(
      {
        name: this.pokemon.name,
        damage: this.pokemon.damage,
        captured: this.pokemon.captured.toString(),
        date: this.pokemon.date,
      }
    );

    this.pokemonForm.valueChanges.subscribe(console.log)
  }

  getPokemon(id: number) {
    this.pokemon = this.pokemonsService.getById(id);
  }
}
