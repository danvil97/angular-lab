import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonPageComponent} from 'src/app/pokemon/components/pokemon-page/pokemon-page.component'
import {PokemonContentComponent} from "./pokemon/components/pokemon-content/pokemon-content.component";
import {PokemonEditComponent} from "./pokemon/components/pokemon-edit/pokemon-edit.component";

const routes: Routes = [
  {
    path:'',
    component:PokemonContentComponent,
    pathMatch:'full'
  },
  {
    path:'pokemon/:id',
    component:PokemonPageComponent
  },
  {
    path:'edit/:id',
    component:PokemonEditComponent
  },
  {
    path:'search/:name',
    component:PokemonContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
