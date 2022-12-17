import { Component, OnInit } from '@angular/core';
import {Emoji} from "../../../models/Emoji";
import {EmojiService} from "../../../services/emoji.service";
import {faRepeat, faReply} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-removed-emojis-list',
  templateUrl: './removed-emojis-list.component.html',
  styleUrls: ['./removed-emojis-list.component.scss']
})
export class RemovedEmojisListComponent implements OnInit {
  emojiList!: Emoji[];
  faReply = faRepeat;

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

  onRecoverEmoji(emoji: Emoji) {
    this.emojiService.changeRemovedState(emoji);
  }

}
