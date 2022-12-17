import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string = '';

  @Output() searchEmoji = new EventEmitter<string>();

  onSearchEmoji(emojiName: string) {
    this.searchEmoji.emit(emojiName);
  }

}
