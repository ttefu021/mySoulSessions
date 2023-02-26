import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "nav-tabs",
    template: `
    <div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="create-tab" data-bs-toggle="tab" data-bs-target="#create-tab-pane" type="button" role="tab" aria-controls="create-tab-pane" aria-selected="true">
                        Create Playlists
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="discover-tab" data-bs-toggle="tab" data-bs-target="#discover-tab-pane" type="button" role="tab" aria-controls="discover-tab-pane" aria-selected="false">
                        Discover Music
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="info-tab" data-bs-toggle="tab" data-bs-target="#info-tab-pane" type="button" role="tab" aria-controls="info-tab-pane" aria-selected="false">
                        Music Info
                </button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="create-tab-pane" role="tabpanel" aria-labelledby="create-tab" tabindex="0">
                <create-playlist></create-playlist>
            </div>
            <div class="tab-pane fade" id="discover-tab-pane" role="tabpanel" aria-labelledby="discover-tab" tabindex="0">
                <discover-music></discover-music>
            </div>
            <div class="tab-pane fade" id="info-tab-pane" role="tabpanel" aria-labelledby="info-tab" tabindex="0">
                <music-info></music-info>
            </div>
        </div>
    </div> 
    `,
    styles: [`
    .nav-link {
        color: lightgrey;
        font-size: 1.3rem;
        font-weight: bold;
    }

    `]
})

export class NavTabsComponent {
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    navigateTo(route: string) {
        this.router.navigate([route])
    }
}