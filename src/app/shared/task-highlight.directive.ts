import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2,} from '@angular/core';

@Directive({
  selector: '[appTaskHighlight]',
  standalone: false,
})
export class TaskHighlightDirective implements OnChanges {

  @Input() appTaskHighlight!: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(){
    if (this.appTaskHighlight) {
      // If the task is marked as completed, highlight it visually
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#80C080');
    } else {
      // Otherwise, show it with a normal white background
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightblue');
    }

  }
}
