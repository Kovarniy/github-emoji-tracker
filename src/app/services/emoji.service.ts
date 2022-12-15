import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  constructor(public http: HttpClient) {
  }

  getEmojis() {
    this.http.get('https://api.github.com/emojis')
      .subscribe(res => {
        console.log(res)
      });
  }

}
