import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home_page/home-page.component';
import { LoginService } from './home_page/spotify-login/login.service';
import { BannerComponent } from './home_page/banner/banner.component';
import { PageHeaderComponent } from './pageHeader/pageHeader.component';
import { CreatePlaylistComponent } from './createPlaylist/createPlaylist.component';
import { DiscoverComponent } from './disvover-music/discover.component';
import { MusicInfoComponent } from './music-info/music-info.component';
import { SpotifyLoginComponent } from './home_page/spotify-login/spotify-login.component';
import { HttpClientModule } from '@angular/common/http'
import { NavTabsComponent } from './nav-tabs/nav-tabs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePlaylistService } from './createPlaylist/createPlatlist.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BannerComponent,
    PageHeaderComponent,
    CreatePlaylistComponent,
    DiscoverComponent,
    MusicInfoComponent,
    SpotifyLoginComponent,
    NavTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, CreatePlaylistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
