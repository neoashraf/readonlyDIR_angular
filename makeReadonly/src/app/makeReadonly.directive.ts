import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[makeReadonly]'
})
export class MakeReadonlyDirective implements OnInit {

  @Input('makeReadonly') IsReadonly: boolean;
  private el: HTMLElement;

  constructor(private elRef: ElementRef) {
    this.el = this.elRef.nativeElement;
  }

  ngOnInit() {
    debugger
    if (this.IsReadonly) {

    }
  }

}