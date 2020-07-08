import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PokemonContentComponent} from "./components/pokemon-content/pokemon-content.component";
import {PokemonCardComponent} from "./components/pokemon-card/pokemon-card.component";
import {DamageDirective} from "./directives/damage.directive";



@NgModule({
  declarations: [
    PokemonContentComponent,
    PokemonCardComponent,
    DamageDirective,],
  imports: [
    CommonModule
  ],
  exports:[
    PokemonContentComponent
  ]
})
export class PokemonModule { }
