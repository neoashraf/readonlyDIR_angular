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
      this.toMakeReadonly(this.el);
    }
  }

  toMakeReadonly(currentNode:HTMLElement) {
    debugger
    if (currentNode && currentNode.children.length) {
      for (let i = 0; i < currentNode.children.length; i++) {
        currentNode.children[i]['disabled'] = true;
        this.toMakeReadonly(currentNode[i]);
      }
    } else {
      return null;
    }
  }

}