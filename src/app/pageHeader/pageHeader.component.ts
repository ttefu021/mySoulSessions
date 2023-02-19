import { Component } from "@angular/core";

@Component({
    selector: "bs-page-header",
    template: `
        <nav class="navbar  navbar-dark bg-light">
            <a class="navbar-brand" href="#">
                <div class="logo">
                   SS
                </div>
                <div class="title">
                    My Soul Sessions
                </div>
            </a>
        </nav>`,
    styles: [`
       .navbar-brand {
            display: flex;
            align-items: center;
            height: 100%;
        }

        .logo {
            font-size: 2rem;
            font: Abhaya Libre;
            background-color: #3C1A5B;
            color: #fff;
            padding: 1rem;
            border-radius: 50%;
        }
        
        .title {
            font-size: 3rem;
            font: Abhaya Libre;
            color: #3C1A5B;
            padding: 1rem;
            font-weight: bold;
        }
    `]
})
export class PageHeaderComponent {
}
