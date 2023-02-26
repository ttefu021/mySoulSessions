import { Component } from '@angular/core';
import { LoginService } from './home_page/spotify-login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mySoulSessions';

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    console.log("This should be called every time the app is loaded");
    if (this.loginService.initialTokenReceived) {
       this.loginService.refreshToken(this.loginService.token.refresh_token).subscribe(
            (data:any) => {
                console.log(data);
                this.loginService.saveToken(data);
            }
        )
    }
}
}
