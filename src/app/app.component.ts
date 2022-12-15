import { Component } from '@angular/core';
import {EmojiService} from "./services/emoji.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public e: EmojiService) {
    this.e.getEmojis();
  }

}
