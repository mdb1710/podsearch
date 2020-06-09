import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPodcastComponent } from './search-podcast/search-podcast.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  { path: 'search', component: SearchPodcastComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
