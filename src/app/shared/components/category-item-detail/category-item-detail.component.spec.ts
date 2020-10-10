import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CategoryItemListingComponent } from '../category-item-listing/category-item-listing.component';

import { CategoryItemDetailComponent } from './category-item-detail.component';

describe('ItemListDetailComponent', () => {
  let component: CategoryItemDetailComponent;
  let fixture: ComponentFixture<CategoryItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryItemDetailComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
