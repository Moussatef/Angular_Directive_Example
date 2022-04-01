import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMystyle]'
})
export class MystyleDirective {

  constructor(){}

  @HostBinding('style.backgroundColor') border: string = 'transparent';


  @HostListener('click') onClick() {
      window.alert('Host Element Clicked');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.border = 'transparent';
  }  
  @HostListener('mouseover') onMouseOver() {
      this.border = '#B8B5FF';
  }


}
