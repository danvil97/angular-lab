import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PokemonContentComponent} from "./components/pokemon-content/pokemon-content.component";
import {PokemonCardComponent} from "./components/pokemon-card/pokemon-card.component";
import {DamageDirective} from "./directives/damage.directive";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    PokemonContentComponent,
    PokemonCardComponent,
    DamageDirective,],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[
    PokemonContentComponent
  ]
})
export class PokemonModule { }
