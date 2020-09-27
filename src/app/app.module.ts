import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonContentComponent } from './pokemon-content/pokemon-content.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { DamageDirective } from './damage.directive';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonHeaderComponent,
    PokemonContentComponent,
    PokemonCardComponent,
    DamageDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
