import { Component, OnInit } from '@angular/core';
import { ItemList } from 'src/app/shared/models/item-listing.model';
import { Item } from '../../../shared/models/item.model';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  homeData: any;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.getHomeData().subscribe(data => {
      this.homeData = data;
    })
  }

}
