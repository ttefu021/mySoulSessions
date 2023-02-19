export class LoginService {
    private _client:string = '8bfa2570040a435b91cb42f1798cef21';
    getAuthUrl() {
        return 'https://accounts.spotify.com/authorize?' +
                'client_id=' + this._client +
                '&response_type=code&' +
                'redirect_uri=http://localhost:4200/callback' +
                '&scope=user-read-private%20user-read-email%20playlist-modify-public%20playlist-modify-private%20playlist-read-private%20playlist-read-collaborative%20user-library-read%20user-library-modify%20user-top-read%20user-read-recently-played%20user-follow-read%20user-follow-modify';
    }
}