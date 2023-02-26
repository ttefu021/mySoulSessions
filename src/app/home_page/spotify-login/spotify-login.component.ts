import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "environment";

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

export class SpotifyLoginComponent{
    code: string = "";
    
    constructor(private route: ActivatedRoute, private loginService: LoginService){
        this.route.queryParamMap.subscribe(params => {
            this.code = params.get("code")||"";

            loginService.getAccessToken(this.code).subscribe(response => {
                console.log(response);
                
            })

        
        })
    }
}
