import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home_page/home-page.component';
import { SpotifyLoginComponent } from './home_page/spotify-login/spotify-login.component';
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'callback', component: SpotifyLoginComponent},
  { path: 'soulSessions', component: NavTabsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
