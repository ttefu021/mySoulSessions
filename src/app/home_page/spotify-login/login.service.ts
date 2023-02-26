import { Injectable } from "@angular/core";
import { environment } from "environment";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, throwError, buffer } from "rxjs";

@Injectable()
export class LoginService {
    private token:string = '';

    constructor(private http: HttpClient) {}

    getAuthUrl() {
        return 'https://accounts.spotify.com/authorize?' +
                'client_id=' + environment.config.clientId +
                '&response_type=code&' +
                'redirect_uri=' + environment.config.AuthRedirectUri +
                '&scope=' + environment.config.scope 
    }

    getAccessToken(codeReceived: string){
        return this.http.post(
            'https://accounts.spotify.com/api/token',
            `grant_type=client_credentials&
            redirect_uri=${environment.config.AuthRedirectUri}/retriveAccessToken&
            code=${codeReceived}&
            client_id=${environment.config.clientId}&
            client_secret=${environment.config.clientSecret}`,
            { headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded' 
                })
            }
        )
    }

    saveToken(token:string){
        this.token = token;
    }

    getToken(){
        return this.token;
    }
}