import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {

  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  name:string ='';

  ngOnInit(): void {
  }

  filterName(){
    this.searchValue.emit(this.name);
  }
}
