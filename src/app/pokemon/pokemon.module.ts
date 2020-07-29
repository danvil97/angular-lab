import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PokemonContentComponent} from "./components/pokemon-content/pokemon-content.component";
import {PokemonCardComponent} from "./components/pokemon-card/pokemon-card.component";
import {DamageDirective} from "./directives/damage.directive";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PokemonContentComponent,
    PokemonCardComponent,
    DamageDirective,
    PokemonSearchComponent,
    PokemonPageComponent,],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    RouterModule,
    FormsModule,

  ],
  exports:[
    PokemonContentComponent
  ]
})
export class PokemonModule { }
