import {Component, OnInit} from '@angular/core';
import {Pokemon, PokemonsService} from "../../services/pokemons.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from '@angular/material/dialog';

import * as moment from 'moment';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {
  pokemon: Pokemon;
  pokemonForm: FormGroup;

  constructor(private pokemonsService: PokemonsService, private route: ActivatedRoute, private fb: FormBuilder, private dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
    this.getPokemon(this.route.snapshot.params.id);
    this.pokemonForm = this.fb.group(
      {
        name: [this.pokemon.name, [Validators.required]],
        damage: [this.pokemon.damage, [Validators.required, Validators.min(1)]],
        captured: [this.pokemon.captured.toString(), [Validators.required]],
        date: [moment(this.pokemon.date, "MM/DD/YYYY").format(), [Validators.required]],
      }
    );

    this.pokemonForm.valueChanges.subscribe(console.log)
  }

  get name() {
    return this.pokemonForm.get('name');
  }

  get damage() {
    return this.pokemonForm.get('damage');
  }

  get date() {
    return this.pokemonForm.get('date');
  }

  submitHandler() {
    this.pokemon.name = this.pokemonForm.value.name;
    this.pokemon.damage = this.pokemonForm.value.damage;
    this.pokemon.captured = this.pokemonForm.value.captured;
    this.pokemon.date = moment(this.pokemonForm.value.date).format("MM/DD/YYYY");
    this.openSaveDialog();
  }

  openSaveDialog() {
    const dialogRef = this.dialog.open(DialogSaved);

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/pokemon/' + this.pokemon.id]);
    });
  }


  getPokemon(id: number) {
    this.pokemon = this.pokemonsService.getById(id);
  }
}

@Component({
  selector: 'dialog-saved',
  templateUrl: 'dialog-saved.html',
})
export class DialogSaved {
}
