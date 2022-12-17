import { Component, OnInit } from '@angular/core';
import {EmojiService} from "../../../services/emoji.service";
import {Emoji} from "../../../models/Emoji";
import { faRemove } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-favorites-emojis-list',
  templateUrl: './favorite-emojis-list.component.html',
  styleUrls: ['./favorite-emojis-list.component.scss']
})
export class FavoriteEmojisListComponent implements OnInit {
  emojiList!: Emoji[];
  faRemove = faRemove;

  /**
   * Искомое имя emoji
   */
  neededEmojiName: string = '';

  constructor(private emojiService: EmojiService) {
  }

  ngOnInit(): void {
    this.emojiList = this.emojiService.getEmojis()
      .filter(item => item.isFavorite);
  }

  onSearchEmoji(emojiName: string) {
    this.neededEmojiName = emojiName;
  }

  onRemoveFromFavorite(emoji: Emoji) {
    this.emojiService.changeFavoriteState(emoji);
  }
}
