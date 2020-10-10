import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  private PAGE_TITLE = {
    '/folder/home': "Home"
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.folder = this.PAGE_TITLE[this.router.url];
  }

}
