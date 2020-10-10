import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemHorizontalListingComponent } from './item-horizontal-listing.component';

describe('ItemHorizontalListingComponent', () => {
  let component: ItemHorizontalListingComponent;
  let fixture: ComponentFixture<ItemHorizontalListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemHorizontalListingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemHorizontalListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
