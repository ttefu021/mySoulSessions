import { Component } from "@angular/core";

@Component({
    selector: "music-info",
    template:`
        <div class="container">
            <div class="info">
                Get interesting facts about your favourite songs or artists 
            </div>
            <form class="search">
                <input type="text" placeholder="Search"/>
                <button>search</button>
            </form>
            <div class="results"></div>
        </div>
    `,
    styles: [
        `
        .container {
            margin-top: 20px;
        }

        .info {
            font-size: 2rem;
            color: lightgrey;
            text-align: center;
            font-weight: bold;
            border-bottom: 2px solid red;
        }

        .search input{
            margin-top: 1.5rem;
            width: 50%;
        }
        
    `]
})

export class MusicInfoComponent {}