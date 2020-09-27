import {Injectable} from '@angular/core';

export interface Pokemon {
  id: number;
  name: string;
  damage: number;
  captured: boolean;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'bulbasaur',
      damage: 10,
      captured: false,
      date: "7/10/2020"
    },
    {
      id: 2,
      name: 'ivysaur',
      damage: 20,
      captured: false,
      date: "6/10/2020"
    },
    {
      id: 3,
      name: 'venusaur',
      damage: 30,
      captured: true,
      date: "5/10/2020"
    },
    {
      id: 4,
      name: 'charmander',
      damage: 40,
      captured: false,
      date: "3/12/2020"
    },
    {
      id: 5,
      name: 'charmeleon',
      damage: 50,
      captured: true,
      date: "2/22/2020"
    },
    {
      id: 6,
      name: 'charizard',
      damage: 88,
      captured: false,
      date: "2/22/2020"
    },
    {
      id: 7,
      name: 'squirtle',
      damage: 72,
      captured: false,
      date: "2/22/2020"
    },
    {
      id: 8,
      name: 'wartortle',
      damage: 40,
      captured: true,
      date: "2/22/2020"
    },
    {
      id: 9,
      name: 'blastoise',
      damage: 30,
      captured: true,
      date: "2/22/2020"
    },
    {
      id: 10,
      name: 'caterpie',
      damage: 63,
      captured: false,
      date: "2/22/2020"
    },
    {
      id: 11,
      name: 'metapod',
      damage: 32,
      captured: false,
      date: "2/22/2020"
    },
    {
      id: 12,
      name: 'butterfree',
      damage: 75,
      captured: false,
      date: "2/22/2020"
    },
  ];

  constructor() {
  }

  filterByName(name: string) {
    return this.pokemons.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
  }

  getAll() {
    return this.pokemons;
  }

  getById(id: number) {
    return this.pokemons.find((el: Pokemon) => el.id === +id);
  }

  updatePokemon(pokemon: Pokemon) {
    // this.pokemons.find(el => el.id == pokemon.id) = {...pokemon};
    console.log("______________");
    console.log(this.pokemons);
    this.pokemons = [...this.pokemons, pokemon];
    console.log(this.pokemons);
  }
}
