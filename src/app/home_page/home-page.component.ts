import { Component } from "@angular/core";
import { LoginService } from "./spotify-login/login.service";

@Component({
    templateUrl: "./home-page.component.html",
    styleUrls: ["./home-page.component.css"
    ]

})

export class HomePageComponent{
    url: string;
    constructor(private loginService: LoginService) {
        this.url = loginService.getAuthUrl();
    }
}