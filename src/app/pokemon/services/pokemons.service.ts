import {Injectable} from '@angular/core';

export interface Pokemon {
  id: number;
  name: string;
  damage: number;
  captured: boolean;
  date?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private pokemons: Pokemon[] = [
    {
      name: 'bulbasaur',
      id: 1,
      damage: 10,
      captured: false,
      date:"10-10-10"
    },
    {
      name: 'ivysaur',
      id: 2,
      damage: 20,
      captured: false,
      date:"10-10-10"
    },
    {
      name: 'venusaur',
      id: 3,
      damage: 30,
      captured: true,
      date:"10-10-10"
    },
    {
      name: 'charmander',
      id: 4,
      damage: 40,
      captured: false,
      date:"10-10-10"
    },
    {
      name: 'charmeleon',
      id: 5,
      damage: 50,
      captured: true,
      date:"10-10-10"
    },
    {
      name: 'charizard',
      id: 6,
      damage: 88,
      captured: false,
      date:"10-10-10"
    },
    {
      name: 'squirtle',
      id: 7,
      damage: 72,
      captured: false,
      date:"10-10-10"
    },
    {
      name: 'wartortle',
      id: 8,
      damage: 40,
      captured: true,
      date:"10-10-10"
    },
    {
      name: 'blastoise',
      id: 9,
      damage: 30,
      captured: true,
      date:"10-10-10"
    },
    {
      name: 'caterpie',
      id: 10,
      damage: 63,
      captured: false,
      date:"10-10-10"
    },
    {
      name: 'metapod',
      id: 11,
      damage: 32,
      captured: false,
      date:"10-10-10"
    },
    {
      name: 'butterfree',
      id: 12,
      damage: 75,
      captured: false,
      date:"10-10-10"
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
    return this.pokemons.find(el => el.id === +id);
  }
}
