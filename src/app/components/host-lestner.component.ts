import {
  Component,
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  NgModule,
  Input,
  Output,
  EventEmitter,
  Renderer2,
OnInit,} from '@angular/core';


@Directive({
  selector: '[appChbgcolor]'
})
export class ChangeBgColorDirective {

  //constructor(private el: ElementRef, private renderer: Renderer2) {
       //this.ChangeBgColor('red');
  ///}

  
  //ChangeBgColor(color: string) {

  //    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  //}
}


@Component({
  selector: 'app-host-lestner',
  templateUrl: './host-lestner.component.html',
  styleUrls: ['./host-lestner.component.scss']
})


export class HostLestnerComponent implements OnInit {

  @Input() title!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
