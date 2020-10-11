import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { CONFIG_OBJ } from 'src/app/config';
import { Category } from '../../models/category.model';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {

  appName:string;
  category: Category;
  items: Item[];
  
  constructor(private route: ActivatedRoute, private router: Router, private appService: AppService) {
    this.appName = CONFIG_OBJ.appName;
  }

  ngOnInit() {
    this.category = history.state;

    if(this.category && this.category!=null){
      this.appService.getCategoryItemsById(this.category.categoryId).subscribe((data: Item[]) => {
        this.items = data;
      })
    }
  }

  goBack(){
    this.router.navigate([".."])
  }

}
