import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  @Input('disabled')
  isDisabled = false;

  @Output()
  toggleHighlighted = new EventEmitter(); //Usado para eventos customizados

  constructor() { 
    // console.log("Directive used");
  }

  @HostBinding('class.highlighted')
  get cssClasses() { //Estilo declarado em style.css
    return this.isHighlighted;
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return this.isDisabled;
  }

  //Para esse exemplo não é necessário a atribuição de um evento ($event), caso seja necessário a sintaxe seria da seguinte forma:
  //  @HostListener('mouseover',['$event']){
  //  mouseOver($event) {
  //    this.isHighlighted = true;
  //  }
  // @HostListener('mouseover')
  // mouseOver() {
  //   this.isHighlighted = true;
  // }

  //Os métodos abaixo não necessitam de um $event, porém será utilizado para fins didáticos
  @HostListener('mouseover',['$event'])
  mouseOver($event) {
    this.isHighlighted = true;
    this.toggleHighlighted.emit(this.isHighlighted);
  }

  @HostListener('mouseleave',['$event'])
  mouseLeave($event) {
    this.isHighlighted = false;
    this.toggleHighlighted.emit(this.isHighlighted);
  }

  toggle(){
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlighted.emit(this.isHighlighted);
  }

}
