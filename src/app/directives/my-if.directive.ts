import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  @Input() set appMyIf(condition: boolean) {
    if(!condition) {
      this.viewConRef.createEmbeddedView(this.tempRef);
    }
    else {
      this.viewConRef.clear();
    }
  }

  constructor(private tempRef: TemplateRef<any>, private viewConRef: ViewContainerRef) { }

}
