import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCollectionComponent } from './global-collection.component';

describe('GlobalCollectionComponent', () => {
  let component: GlobalCollectionComponent;
  let fixture: ComponentFixture<GlobalCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
