import { Component } from "@angular/core";

@Component({
    selector: "app-pageNotFound",
    template: ` 
    <div class="page-not-found">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
    </div>
    `,
    styles: [`
        .page-not-found {
            text-align: center;
            margin-top: 100px;
            font-size: 1.5em;
        
        }
    `]
})

export class PageNotFoundComponent {
    
    }
