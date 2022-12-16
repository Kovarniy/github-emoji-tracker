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

}
