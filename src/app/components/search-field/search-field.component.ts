import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {debounceTime, distinctUntilChanged, fromEvent, map} from "rxjs";

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements AfterViewInit {

  @Output() searchEmoji = new EventEmitter<string>();
  @ViewChild('searchBar') searchBar: ElementRef | undefined;

  ngAfterViewInit(): void {
    this.searchEvent();
  }

  searchEvent() {
    fromEvent<Event>(this.searchBar?.nativeElement, 'input')
      .pipe(
        map((event: Event) => {
          return (event.target as HTMLInputElement).value;
        }),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(emojiName => {
        this.searchEmoji.emit(emojiName);
      })
  }

}
