import {Component, OnInit} from '@angular/core';
import {EmojiService} from "../../services/emoji.service";
import {Emoji} from "../../models/Emoji";
import {faRepeat, faStar} from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-emojis-list',
  templateUrl: './emojis-list.component.html',
  styleUrls: ['./emojis-list.component.scss'],
})
export class EmojisListComponent implements OnInit {

  emojiList!: Emoji[];
  faStar = faStar;
  faRemove = faRemove;
  faReply = faRepeat;

  /**
   * Искомое имя emoji
   */
  neededEmojiName: string = '';

  listType: 'all-emojis' | 'favorite-emojis' | 'removed-emojis' = 'all-emojis';

  constructor(private emojiService: EmojiService,
              private rooter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.rooter.url.subscribe(url => {
      switch (url[0].path) {
        case 'all-emojis':
          this.emojiService.getEmojis()
            .subscribe((emojiList: Emoji[]) => {
              this.emojiList = emojiList;
              this.listType = 'all-emojis';
            });
          break;
        case 'favorite-emojis':
          this.emojiService.getEmojis()
            .subscribe((emojiList: Emoji[]) => {
              this.emojiList = emojiList.filter(item => item.isFavorite);
              this.listType = 'favorite-emojis';
            });
          break;
        case 'removed-emojis':
          this.emojiService.getEmojis()
            .subscribe((emojiList: Emoji[]) => {
              this.emojiList = emojiList.filter(item => item.isRemoved);
              this.listType = 'removed-emojis';
            });
          break;
      }
    });
  }

  onSearchEmoji(emojiName: string) {
    this.neededEmojiName = emojiName;
  }

  onChangeFavoriteState(emoji: Emoji) {
    this.emojiService.changeFavoriteState(emoji);
  }

  onRemove(emoji: Emoji) {
    this.emojiService.changeRemovedState(emoji);
  }

  /**
   * Удалить emoji из списка любимых
   */
  onRemoveFromFavorite(emoji: Emoji) {
    this.onChangeFavoriteState(emoji);
  }

  /**
   * Восстановить emoji из списка удаленных
   */
  onRecoverEmoji(emoji: Emoji) {
    this.emojiService.changeRemovedState(emoji);
  }

  isEmojiVisible(emoji: Emoji): boolean {
    return (this.listType === 'all-emojis' && !emoji.isRemoved)
        || (this.listType === 'favorite-emojis' && emoji.isFavorite)
        || (this.listType === 'removed-emojis' && emoji.isRemoved);
  }
}
