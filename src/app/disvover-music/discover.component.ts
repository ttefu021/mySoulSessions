import { Component } from "@angular/core";

@Component({
    selector: "discover-music",
    template:`
        <div class="container">
            <div class="info">
                Discover new music from different genres or artists
            </div>
            <form class="search">
                <input type="text" placeholder="Search"/>
                <button>search</button>
            </form>
            <div id="results"><div>
        </div>
    `,
    styles:[`
        .container {
            margin-top: 20px;
        }

        .info {
            font-size: 2rem;
            color: lightgrey;
            text-align: center;
            font-weight: bold;
            border-bottom: 2px solid yellow;
        }

        .search input{
            margin-top: 1.5rem;
            width: 50%;
        }
    `]
})

export class DiscoverComponent{}