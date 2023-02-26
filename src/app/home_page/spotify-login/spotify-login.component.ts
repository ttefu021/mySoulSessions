import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "environment";
import { Router } from "@angular/router";

@Component({
    template:`
        <div>
            <h1>Connecting to your spotify account</h1>
            <div class="loading">
                <div class="spinner-border" style="width: 4rem; height: 4rem;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    `,
    styles: [`
        h1 {
            color: lightgrey;
            text-align: center;
        }

        .loading {
            text-align: center;
            margin-top: 3rem;
            color: yellow;
        }
    `]
})

export class SpotifyLoginComponent {
    code: string = "";

    constructor(private route: ActivatedRoute, public loginService: LoginService, private router: Router){
        this.route.queryParamMap.subscribe(async params => {
            this.code = params.get("code")||"";
            
             loginService.getAccessToken(this.code).subscribe(
                (data:any) => {
                    console.log(data);
                    loginService.saveToken(data);
                    loginService.initialTokenReceived = true;
                }
            )
        })
        
        setTimeout(() => {
            if (loginService.initialTokenReceived) {
                this.router.navigate(['soulSessions']);
            }
        }
        , 2000);

    }


}
