import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appDamage]'
})

export class DamageDirective implements OnInit {
  @Input('appDamage') dmg: number

  constructor(private elR: ElementRef) {
  }

  ngOnInit() {
    if (this.dmg >= 50) {
      switch (this.elR.nativeElement.className) {
        case "cardGrid":
          this.elR.nativeElement.style.boxShadow = "10px 10px 2px -2px rgba(255, 0, 0, 0.2)";
          break;
        case "cardGrid__dmg":
          this.elR.nativeElement.style.color = "red";
          break;
        case"cardList":
          this.elR.nativeElement.style.border="solid red 2px"
      }
    }
  }
}
