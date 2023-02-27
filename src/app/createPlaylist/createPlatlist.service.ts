import { HttpClient, HttpParams } from "@angular/common/http";
import { LoginService } from "../home_page/spotify-login/login.service";
import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";

@Injectable()
export class CreatePlaylistService {
    constructor(private http:HttpClient, private loginService: LoginService){
    }
    
    getPosssblePlaylists(query: string) {
        const searchUrl = 'https://api.spotify.com/v1/search';
        const httpOptions = this.loginService.getAuthHeaderWithContentType();
        const params = new HttpParams()
            .set('q', query)
            .set('include_external', 'audio')
            .set('type', 'track');

        return this.http.get(
            searchUrl,
            {headers: httpOptions.headers, params: params}
        );
    }

    createPlaylist(playlistName: string) {
        const createPlaylistUrl = 'https://api.spotify.com/v1/users/' + sessionStorage.getItem('user_id') + '/playlists';
        const httpOptions = this.loginService.getAuthHeaderWithContentType();
        const body = {
            name: 'My ' + playlistName + ' SoulSession playlist',
            public: false,
            description: 'Playlist created by mySoulSession app with the theme: ' + playlistName,
        };

        return this.http.post(
            createPlaylistUrl,
            body,
            {headers: httpOptions.headers}
        );
    }

    addTracksToPlaylist(playlistId: string, trackIds: string[]) {
        const addTracksUrl = 'https://api.spotify.com/v1/playlists/' + playlistId + '/tracks';
        const httpOptions = this.loginService.getAuthHeaderWithContentType();
        const body = {
            uris: trackIds
        };

        return this.http.post(
            addTracksUrl,
            body,
            {headers: httpOptions.headers}
        );
    }

    getTrackIds(tracks: any[]) {
        let trackIds: string[] = [];
        tracks.forEach(track => {
            trackIds.push(track.uri);
        });
        return trackIds;
    }

}