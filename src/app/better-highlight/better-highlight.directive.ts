import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  //@Input() highlightColor: string = 'blue';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }
  
  @HostListener('mouseenter') mouseover(eventdata: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    //this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventdata: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    //this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
