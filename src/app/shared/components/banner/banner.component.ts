import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {

  @ViewChild('mySlider') slider: IonSlides; 

  
  slideOpts = {
    slidesPerView: 3,
    initialSlide: 0,
    speed: 1,
    init: true,
  };

  constructor() { }

  ngOnInit() {}

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
