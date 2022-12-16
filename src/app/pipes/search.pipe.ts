import { Pipe, PipeTransform } from '@angular/core';
import {Emoji} from "../models/Emoji";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(emojis: Emoji[], searchValue: string): Emoji[] {
    return emojis
      .filter(emoji => emoji.name.toLowerCase().includes(searchValue));
  }

}
