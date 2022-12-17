import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { SidebarNavigationComponent } from './components/sidebar-navigation/sidebar-navigation.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { AllEmojisListComponent } from './components/emojis-list/all-emojis-list/all-emojis-list.component';
import { FavoriteEmojisListComponent } from './components/emojis-list/favorite-emoji-list/favorite-emojis-list.component';
import { RemovedEmojisListComponent } from './components/emojis-list/removed-emojis-list/removed-emojis-list.component';
import { SearchPipe } from './pipes/search.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { ImageWithPopoverComponent } from './components/image-with-popover/image-with-popover.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ScrollingModule} from "@angular/cdk/scrolling";

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavigationComponent,
    SearchFieldComponent,
    AllEmojisListComponent,
    FavoriteEmojisListComponent,
    RemovedEmojisListComponent,
    SearchPipe,
    HeaderComponent,
    ImageWithPopoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
