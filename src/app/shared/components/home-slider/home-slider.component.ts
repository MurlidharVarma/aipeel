import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss'],
})
export class HomeSliderComponent implements OnInit {

  @ViewChild('mySlider') slider: IonSlides; 
  
  slideOpts = {
    initialSlide: 0,
    speed: 50,
    init: true,
  };

  slides =[
    { image: 'assets/slides/Home1.jpg', textSize: "1.4em", textColor:"lime", backgroundColor:"", text: "Ende Keralam, Ethare Sundaram"},
    { image: 'assets/slides/Home2.jpg', textSize: "", textColor:"", backgroundColor:"", text: ""},
    { image: 'assets/slides/Home3.jpg', textSize: "1.2em", textColor:"white", backgroundColor:"black", text: "Straight from GOD's own country to your home"},
    { image: 'assets/slides/Home4.jpg', textSize: "", textColor:"", backgroundColor:"", text: ""},
    { image: 'assets/slides/Home5.jpg', textSize: "", textColor:"", backgroundColor:"", text: ""},
    { image: 'assets/slides/Home6.jpg', textSize: "", textColor:"", backgroundColor:"", text: ""},
    { image: 'assets/slides/Home7.jpg', textSize: "", textColor:"", backgroundColor:"", text: ""},
    { image: 'assets/slides/Home8.jpg', textSize: "", textColor:"", backgroundColor:"", text: ""},
    { image: 'assets/slides/Home9.jpg', textSize: "", textColor:"", backgroundColor:"", text: ""},
  ]
  constructor() { }

  ngOnInit() {}

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

}
