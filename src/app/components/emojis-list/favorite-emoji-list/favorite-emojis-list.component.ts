import { Component, OnInit } from '@angular/core';
import {EmojiService} from "../../../services/emoji.service";

@Component({
  selector: 'app-favorites-emojis-list',
  templateUrl: './favorite-emojis-list.component.html',
  styleUrls: ['./favorite-emojis-list.component.scss']
})
export class FavoriteEmojisListComponent implements OnInit {

  constructor(private emojiService: EmojiService) { }

  ngOnInit(): void {
    this.emojiService.getEmojis();
  }

}
