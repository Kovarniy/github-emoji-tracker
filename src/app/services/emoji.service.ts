import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Emoji} from "../models/Emoji";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class EmojiService {

  private emojiList: Emoji[] = [];

  private emoji$:BehaviorSubject<Emoji[]> = new BehaviorSubject<Emoji[]>([]);

  constructor(public http: HttpClient) {
    this.http.get('https://api.github.com/emojis')
      .subscribe(emojis => {
        const entries = Object.entries(emojis);

        for (const [emojiName, emojiUrl] of entries) {
          this.emojiList.push(new Emoji(emojiName, emojiUrl as string,
            this.isEmojiRemoved(emojiName),
            this.isEmojiFavorite(emojiName)));
        }

        this.emoji$.next(this.emojiList);
      });
  }

  getEmojis() {
    return this.emoji$;
  }

  /**
   * Добавляет и удаляет emoji из множества любимых.
   * Каждый вызов метода меняет состояние "isFavorite" на противоположное.
   * @param emoji текущий emoji
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
    this.updateSetStateInLocalStorage('favorite', favoriteEmojis);
    this.emoji$.next(this.emojiList);
  }

  /**
   * Добавляет и удаляет emoji из множества удаленных.
   * Каждый вызов метода меняет состояние "isRemoved" на противоположное.
   * @param emoji текущий emoji
   * */
  changeRemovedState(emoji: Emoji) {
    const favoriteEmojis = this.getSetStateFromLocalStorage('removed');
    if (!favoriteEmojis.has(emoji.name)) {
      favoriteEmojis.add(emoji.name);
      emoji.isRemoved = true;
    } else {
      favoriteEmojis.delete(emoji.name);
      emoji.isRemoved = false;
    }
    this.updateSetStateInLocalStorage('removed', favoriteEmojis);
    this.emoji$.next(this.emojiList);
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
  private updateSetStateInLocalStorage(key: string, savedSet: Set<string>) {
    const savedArray = Array.from(savedSet);
    localStorage.setItem(key, JSON.stringify(savedArray));
  }

  private isEmojiRemoved(emojiName: string): boolean {
    const removedEmojis = this.getSetStateFromLocalStorage('removed');
    return removedEmojis.has(emojiName);
  }

  private isEmojiFavorite(emojiName: string): boolean {
    const favoriteEmojis = this.getSetStateFromLocalStorage('favorite');
    return favoriteEmojis.has(emojiName);
  }

}
