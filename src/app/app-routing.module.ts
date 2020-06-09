import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPodcastComponent } from './search-podcast/search-podcast.component';


const routes: Routes = [
  { path: "search", component: SearchPodcastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
