import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Emoji} from "../models/Emoji";

@Injectable({
  providedIn: 'root',
  // useExisting: true
})
export class EmojiService {

  private emojiList: Emoji[] = [];

  constructor(public http: HttpClient) {
    this.http.get('https://api.github.com/emojis')
      .subscribe(emojis => {
        const entries = Object.entries(emojis);

        for (const [emojiName, emojiUrl] of entries) {
          this.emojiList.push(new Emoji(emojiName, emojiUrl as string));
        }
      });
  }

  getEmojis() {
    return this.emojiList;
  }

  /**
   * Добавляет и удаляет emoji из множества любимых.
   * @param emoji
   */
  changeFavoriteState(emoji: Emoji) {
    const favoriteEmojis = this.getSetStateFromLocalStorage('favorite');
    if (!favoriteEmojis.has(emoji.name)) {
      favoriteEmojis.add(emoji.name);
      emoji.isFavorite = true;
    } else {
      favoriteEmojis.delete(emoji.name);
      emoji.isFavorite = false;
    }
    this.updateSetStateFromLocalStorage('favorite', favoriteEmojis);
  }

  removeEmoji(emoji: Emoji) {

  }

  /**
   * Получить Set с состоянием emoji из LocalStorage
   * @param key ключь эелемента в LocalStorage
   */
  private getSetStateFromLocalStorage(key: string): Set<string> {
    const element = localStorage.getItem(key);
    if (Boolean(element)) {
      return new Set<string>(JSON.parse(element as string));
    } else {
      return new Set<string>();
    }
  }

  /**
   * Обновить Set с состоянием emoji из LocalStorage
   * @param key ключь эелемента в LocalStorage
   * @param savedSet сохраняемое множество
   */
  private updateSetStateFromLocalStorage(key: string, savedSet: Set<string>) {
    const savedArray = Array.from(savedSet);
    localStorage.setItem(key, JSON.stringify(savedArray));
  }

}
