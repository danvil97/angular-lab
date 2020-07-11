import {Injectable} from '@angular/core';

export interface Pokemon {
  id: number;
  name: string;
  damage: number;
  captured: boolean;
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
    },
    {
      name: 'ivysaur',
      id: 2,
      damage: 20,
      captured: false,
    },
    {
      name: 'venusaur',
      id: 3,
      damage: 30,
      captured: true,
    },
    {
      name: 'charmander',
      id: 4,
      damage: 40,
      captured: false,
    },
    {
      name: 'charmeleon',
      id: 5,
      damage: 50,
      captured: true,
    },
    {
      name: 'charizard',
      id: 6,
      damage: 88,
      captured: false,
    },
    {
      name: 'squirtle',
      id: 7,
      damage: 72,
      captured: false,
    },
    {
      name: 'wartortle',
      id: 8,
      damage: 40,
      captured: true,
    },
    {
      name: 'blastoise',
      id: 9,
      damage: 30,
      captured: true,
    },
    {
      name: 'caterpie',
      id: 10,
      damage: 63,
      captured: false,
    },
    {
      name: 'metapod',
      id: 11,
      damage: 32,
      captured: false,
    },
    {
      name: 'butterfree',
      id: 12,
      damage: 75,
      captured: false,
    },
  ];

  constructor() {
  }

  getAll() {
    return this.pokemons;
  }

  getById(id: number) {
    const result = this.pokemons.filter(el=>el.id===id);
    return result;
  }
}
