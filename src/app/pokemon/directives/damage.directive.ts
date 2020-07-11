import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appDamage]'
})

export class DamageDirective implements OnInit{
  @Input('appDamage') dmg:number
  constructor(private elR: ElementRef) { }
  ngOnInit() {
    if (this.dmg >= 50) {this.elR.nativeElement.style.borderColor = "red";this.elR.nativeElement.style.borderWidth="3px";};
  }
}
