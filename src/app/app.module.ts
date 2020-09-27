import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {PokemonModule} from "./pokemon/pokemon.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UnsavedChangesGuard} from "./pokemon/guards/unsaved-changes.guard";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,

    PokemonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
