export class Emoji {
  name: string;
  url: string;
  isRemoved: boolean;
  isFavorite: boolean;

  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
    this.isRemoved = false;
    this.isFavorite = false;
  }
}
