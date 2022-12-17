import {Component, OnInit} from '@angular/core';
import {EmojiService} from "../../../services/emoji.service";
import {Emoji} from "../../../models/Emoji";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-all-emojis-list',
  templateUrl: './all-emojis-list.component.html',
  styleUrls: ['./all-emojis-list.component.scss']
})
export class AllEmojisListComponent implements OnInit {

  title = 'все';
  emojiList!: Emoji[];
  faStar = faStar;
  faRemove = faRemove;

  /**
   * Искомое имя emoji
   */
  neededEmojiName: string = '';

  constructor(private emojiService: EmojiService) {
  }

  ngOnInit(): void {
    this.emojiList = this.emojiService.getEmojis();
  }

  onSearchEmoji(emojiName: string) {
    this.neededEmojiName = emojiName;
  }

  onChangeFavoriteState(emoji: Emoji) {
    this.emojiService.changeFavoriteState(emoji);
  }

  onRemove(emoji: Emoji) {
    this.emojiService.removeEmoji(emoji);
  }

}
