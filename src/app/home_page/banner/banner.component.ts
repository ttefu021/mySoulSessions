import { Component } from "@angular/core";

@Component({
    selector: "banner",
    template: `
  <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/headphones.jpg" class="d-block w-100" alt="..." height="450">
      <div class="carousel-caption d-none d-md-block">
        <h2>
            Generate a music playlist based on your mood, thoughts or
            the weather and add it to your spotify account.
        </h2>
      </div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/discover.jpg" class="d-block w-100" alt="..." height="450">
      <div class="carousel-caption d-none d-md-block">
        <h2>
            Discover new music or podcassts which has been recently 
            released or you have never heard.
        </h2>
      </div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/learn.jpg" class="d-block w-100" alt="..." height="450">
      <div class="carousel-caption d-none d-md-block">
        <h2>
            Get information about your favourite music or podcasts
        </h2>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    `,
    styles: [`
    .carousel {
        margin-top: 60px;
    }

    .carousel-caption {
        color: yellow;
        font-weight: bold;
        top: 130px;
    }
    `]
})

export class BannerComponent{
}
