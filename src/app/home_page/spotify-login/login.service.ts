import { Injectable } from "@angular/core";
import { environment } from "environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, throwError, buffer } from "rxjs";


@Injectable()
export class LoginService {
    token:{access_token: string, refresh_token: string, 
                    expires_in: number,  token_type: string, 
                    scope: string} = {
        access_token: '',
        refresh_token: '',
        expires_in: 0,
        token_type: '',
        scope: ''
    };

    initialTokenReceived: boolean = false;

    constructor(private http: HttpClient) {}

    getAuthUrl() {
        return 'https://accounts.spotify.com/authorize?' +
                'client_id=' + environment.config.clientId +
                '&response_type=code&' +
                'redirect_uri=' + environment.config.AuthRedirectUri +
                '&scope=' + environment.config.scope 
    }

    getAccessToken(codeReceived: string){
        const tokenUrl = 'https://accounts.spotify.com/api/token';
        const httpOtions = { headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(environment.config.clientId + ':' + environment.config.clientSecret) 
            })}
        const body = new URLSearchParams();
        body.set('grant_type', 'authorization_code');
        body.set('code', codeReceived);
        body.set('redirect_uri', environment.config.AuthRedirectUri);

        return this.http.post(tokenUrl, body.toString(), httpOtions);
    }

    refreshToken(refreshToken: string){
        const tokenUrl = 'https://accounts.spotify.com/api/token';
        const httpOtions = { headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(environment.config.clientId + ':' + environment.config.clientSecret) 
            })}
        const body = new URLSearchParams();
        body.set('grant_type', 'refresh_token');
        body.set('refresh_token', refreshToken);

        return this.http.post(tokenUrl, body.toString(), httpOtions);
    }
            

    saveToken(token: any ){
        this.token = token;
    }

    getToken(){
        return this.token;
    }
}