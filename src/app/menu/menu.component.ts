import { Component } from "@angular/core";

@Component({
    selector: "app-menu",
    template: `
    <div class="menu">
        <div class="menu-item">
            <a routerLink="/home" routerLinkActive="active">Home</a>
        </div>
        <div class="menu-item">
            <a routerLink="/playlists" routerLinkActive="active">Playlists</a>
        </div>
        <div class="menu-item">
            <a routerLink="/about" routerLinkActive="active">About</a>
        </div>
    </div>
    `,
    styles: [`
        .menu {
            height: 50px;
            width: 100%;
            background-color: #1db954;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .menu-item {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .menu-item a {
            color: white;
            text-decoration: none;
            font-size: 1.2em;
        }

        .menu-item a:hover {
            color: #1ed760;
        }
        
        .menu-item a.active {
            color: #1ed760;
        }
    `]
})

export class MenuComponent {
        
    }

    