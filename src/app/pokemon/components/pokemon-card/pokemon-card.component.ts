import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon;
  @Input() gridView;
  constructor() {}
  handleClick(pokemon: any) {
    pokemon.captured = !pokemon.captured;
    console.log(
      `Покемон ${pokemon.name.toUpperCase()} был ${
        pokemon.captured ? 'пойман' : 'отпущен'
      }`
    );
  }
  ngOnInit(): void {}
}
