export const environment = {
    config: {
        clientId: '8bfa2570040a435b91cb42f1798cef21',
        AuthRedirectUri: 'http://localhost:4200/callback',
        scope: 'user-read-private%20' + 
                'user-read-email%20' + 
                'playlist-modify-public%20' + 
                'playlist-modify-private%20' + 
                'playlist-read-private%20' +
                'playlist-read-collaborative%20' +
                'user-library-read%20' +
                'user-library-modify%20' + 
                'user-top-read%20' + 
                'user-read-recently-played%20' +
                'user-follow-read%20' + 
                'user-follow-modify',
        clientSecret: 'a25bc073a5654eb3a266218195e732e7'

    }
}