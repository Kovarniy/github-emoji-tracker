import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmojisListComponent} from "./components/emojis-list/emojis-list.component";

const routes: Routes = [
  {path: 'all-emojis', component: EmojisListComponent},
  {path: 'favorite-emojis', component: EmojisListComponent},
  {path: 'removed-emojis', component: EmojisListComponent},
  {path: '**', redirectTo: 'all-emojis'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
