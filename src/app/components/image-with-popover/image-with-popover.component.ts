import {Component, Input} from '@angular/core';
import {Emoji} from "../../models/Emoji";

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: 'app-image-with-popover',
  templateUrl: './image-with-popover.component.html',
  styleUrls: ['./image-with-popover.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('800ms ease-in'))
    ])
  ]
})
export class ImageWithPopoverComponent {

  @Input() emoji?: Emoji;

  show: boolean = false;

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  onShow() {
    this.show = true;
  }

  onHidden() {
    this.show = false;
  }

}
