import { Component } from "@angular/core";
import { LoginService } from "../home_page/spotify-login/login.service";
import { Router } from "@angular/router";

@Component({
    selector: "page-header",
    template: `
     <div class="header">
        <div class="logo">
            <div class="icon">
                <a href="\">
                    SS
                </a>
            </div>
            <div class="title">MySoul Sessions</div>
        </div>
    </div>
       `,

    styles: [`
    .header {
        /* background-color: gray; */
        padding: 1rem;
        margin-bottom: 20px;
    }

    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .icon {
        font-size: 3rem;
        font-weight: bold;
        color: grey;
        background-color: white;
        padding: 1rem;
        border-radius: 50%;
        margin: 1rem;
    }

    .title {
        font-size: 3rem;
        font-weight: bold;
        color: lightgrey;
        margin: 1rem;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    .icon:hover {
        color: white;
        background-color: lightgrey;
    }
    `]
})
export class PageHeaderComponent {

}
