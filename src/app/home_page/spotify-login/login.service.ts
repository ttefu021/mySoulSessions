import { Injectable } from "@angular/core";
import { environment } from "environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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

    private static initialTokenReceived: boolean = false;

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

        this.http.post(tokenUrl, body.toString(), httpOtions).subscribe(
            (data:any) => {
                LoginService.initialTokenReceived = true;
                this.token = data;
                this.saveTokenToStorage(data);
            }
        );
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

    getAccessTokenFromStorage(){
        return sessionStorage.getItem('access_token');
    }

    getRefreshTokenFromStorage(){
        return sessionStorage.getItem('refresh_token');
    }

    saveTokenToStorage(token: any){
        sessionStorage.setItem('access_token', token.access_token);
        sessionStorage.setItem('refresh_token', token.refresh_token);
    }

    removeTokenFromStorage(){
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('refresh_token');
    }

    getAuthHeaderWithContentType(){
        return { headers: new HttpHeaders({
            'Authorization': 'Bearer ' + this.getAccessTokenFromStorage(),
            'Content-Type': 'application/json'
            })}
    }

    getUserAndSaveToStorage(){
        return this.http.get(
            'https://api.spotify.com/v1/me', 
            this.getAuthHeaderWithContentType()).subscribe(
                (data:any) => {
                    sessionStorage.setItem('user_id', data.id);
                })
    }

}