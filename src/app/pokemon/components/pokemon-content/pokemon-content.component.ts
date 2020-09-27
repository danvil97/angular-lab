import {Component, OnInit} from '@angular/core';
import {Pokemon, PokemonsService} from '../../services/pokemons.service'

@Component({
  selector: 'app-pokemon-content',
  templateUrl: './pokemon-content.component.html',
  providers: [PokemonsService],
  styleUrls: ['./pokemon-content.component.scss'],
})
export class PokemonContentComponent implements OnInit {
  pokemons: Pokemon[];
  cardViewToggle = true;

  constructor(private pokemonsService: PokemonsService) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemons = this.pokemonsService.getAll();
  }

  onToggleChange(flag: boolean) {
    this.cardViewToggle = flag;
  }

  onButtonClick(pokemon: Pokemon) {
    pokemon.captured = !pokemon.captured;

    console.log(
      `Покемон ${pokemon.name.toUpperCase()} был ${
        pokemon.captured ? 'пойман' : 'отпущен'
      }`
    );
  }
}
