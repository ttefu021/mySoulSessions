import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { CreatePlaylistService } from "./createPlatlist.service";

@Component({
    selector: "create-playlist",
    templateUrl: './createPlaylist.component.html',
    styleUrls: ['./createPlaylist.component.css'] 
})

export class CreatePlaylistComponent {
    searchControl = new FormControl();
    query: string = "";
    results:any[] = [];
    playlistId: string = "";

    constructor(private createPlaylistService: CreatePlaylistService) {
    }

    onSearch() {
        this.query = this.searchControl.value;
        this.createPlaylistService.getPosssblePlaylists(this.query).subscribe(
            (data: any) => {
                this.results = data.tracks.items;
                console.log(this.results);
            });
    }

    onCreatePlaylist() {
        const trackIds = this.createPlaylistService.getTrackIds(this.results);
        this.createPlaylistService.createPlaylist(this.query).subscribe(
            (data: any) => {
                console.log(data);
                this.playlistId = data.id;
                this.createPlaylistService.addTracksToPlaylist(this.playlistId, trackIds).subscribe(
                    (data: any) => {
                        console.log(data);
                        alert("Playlist created! Check your Spotify account for the new playlist :)");
                    }
                );
            }
        );
        
    }
}
