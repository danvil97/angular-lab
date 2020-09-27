import {ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon;
  @Input() gridView;
  @Output() onButtonClick = new EventEmitter();
  constructor() {
  }

  handleClick(pokemon: any) {
    this.onButtonClick.emit(pokemon)
  }

  ngOnInit(): void {
  }
}
