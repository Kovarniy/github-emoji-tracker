import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllEmojisListComponent} from "./components/emojis-list/all-emojis-list/all-emojis-list.component";
import {
  FavoriteEmojisListComponent
} from "./components/emojis-list/favorite-emoji-list/favorite-emojis-list.component";
import {RemovedEmojisListComponent} from "./components/emojis-list/removed-emojis-list/removed-emojis-list.component";

const routes: Routes = [
  {path: 'all-emojis', component: AllEmojisListComponent},
  {path: 'favorite-emojis', component: FavoriteEmojisListComponent},
  {path: 'removed-emojis', component: RemovedEmojisListComponent},
  {path: '**', redirectTo: 'all-emojis'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
