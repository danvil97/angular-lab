import {ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Pokemon} from "../../services/pokemons.service";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon;
  @Input() gridView;
  @Output() onButtonClick: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  constructor() {
  }

  handleClick() {

    this.onButtonClick.emit(this.pokemon)
  }

  ngOnInit(): void {
  }
}
