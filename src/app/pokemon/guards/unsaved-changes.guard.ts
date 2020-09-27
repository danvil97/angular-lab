import {Injectable} from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {PokemonEditComponent} from "../components/pokemon-edit/pokemon-edit.component";

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<PokemonEditComponent> {
  canDeactivate(
    component: PokemonEditComponent): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.pokemonForm.touched)
      return window.confirm('You have unsaved changes!');
    return true;
  }

}
