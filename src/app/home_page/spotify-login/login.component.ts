import { Component } from "@angular/core";
import { LoginService } from "./login.service";
// import { BannerComponent } from "../banner/banner.component";

@Component({
    selector: "app-login",
    template: `
    <div>
        <H1>Welcome to mySoulSessions</H1>
    <div>
    `,
    styles: [`
        
`]
})

export class LoginComponent {
    isAuth = false;
    hasToken = false;
    url: string;
    constructor(private loginService: LoginService) {
        this.url = loginService.getAuthUrl();
    }
}