import {Component, OnInit} from '@angular/core';
import {EmojiService} from "../../../services/emoji.service";
import {Emoji} from "../../../models/Emoji";

@Component({
  selector: 'app-all-emojis-list',
  templateUrl: './all-emojis-list.component.html',
  styleUrls: ['./all-emojis-list.component.scss']
})
export class AllEmojisListComponent implements OnInit {

  title = 'все';
  emojiList!: Emoji[];

  bufferedEmojiList!: Emoji[];

  /**
   * Искомое имя emoji
   */
  neededEmojiName: string = '';

  constructor(private emojiService: EmojiService) {
  }

  filtergender() {}

  ngOnInit(): void {
    this.emojiList = this.emojiService.getEmojis();
  }

  onSearchEmoji(emojiName: string) {
    this.neededEmojiName = emojiName;
  }
}
