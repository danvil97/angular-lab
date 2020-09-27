import {TestBed} from '@angular/core/testing';
import {PokemonsService} from "./pokemons.service";


describe('PokemonsService', () => {
  let service: PokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return pokemon by id', () => {
    expect(service.getById(1)).toBeTruthy();
  });

  it('should return array of pokemons', () => {
    expect(service.getAll()).toBeTruthy();
  });

  it('should filter pokemons by name', () => {
    expect(service.filterByName('bulbasaur')).toEqual([{
      id: 1,
      name: 'bulbasaur',
      damage: 10,
      captured: false,
      date: "7/10/2020"
    }])
  });
});
