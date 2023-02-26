import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home_page/home-page.component';
import { CreatePlaylistComponent } from './createPlaylist/createPlaylist.component';
import { DiscoverComponent } from './disvover-music/discover.component';
import { MusicInfoComponent } from './music-info/music-info.component';
import { SpotifyLoginComponent } from './home_page/spotify-login/spotify-login.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'callback', component: SpotifyLoginComponent},
  { path: 'create-playlist', component: CreatePlaylistComponent},
  { path: 'discover', component: DiscoverComponent},
  { path: 'music-info', component: MusicInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
