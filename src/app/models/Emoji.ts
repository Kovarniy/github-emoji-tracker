export class Emoji {
  name: string;
  url: string;
  isRemoved: boolean;
  isFavorite: boolean;

  constructor(name: string, url: string, isRemoved: boolean, isFavorite: boolean) {
    this.name = name;
    this.url = url;
    this.isRemoved = isRemoved;
    this.isFavorite = isFavorite;
  }
}
