import {async, ComponentFixture, TestBed, inject, tick, fakeAsync} from "@angular/core/testing";

import {DebugElement} from "@angular/core";
import {By} from '@angular/platform-browser';

import {PokemonCardComponent} from "./pokemon-card.component";

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCardComponent],
    }).compileComponents(); //comp template and css

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain defined pokemon variable', () => {
    component.pokemon = {name: 'test', id: '1', date: '01/01/2000', captured: false, damage: 66}
    expect(component.pokemon).toBeDefined();
  });

  it('should have "Capture" text on button', () => {
    component.pokemon = {name: 'test', id: '1', date: '01/01/2000', captured: false, damage: 66}
    component.gridView = false;
    fixture.detectChanges();
    expect(de.query(By.css('button')).nativeElement.innerText).toContain('Capture');
  });
  it('should have "Release" text on button', () => {
    component.pokemon = {name: 'test', id: '1', date: '01/01/2000', captured: true, damage: 66}
    component.gridView = false;
    fixture.detectChanges();
    expect(de.query(By.css('button')).nativeElement.innerText).toContain('Release');
  });


});
