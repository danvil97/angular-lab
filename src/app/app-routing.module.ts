import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonPageComponent} from 'src/app/pokemon/components/pokemon-page/pokemon-page.component'
import {PokemonContentComponent} from "./pokemon/components/pokemon-content/pokemon-content.component";

const routes: Routes = [
  {
    path:'pokemon/:id',
    component:PokemonPageComponent
  },
  {
    path:'',
    component:PokemonContentComponent,
    pathMatch:'full'
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
