import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionAndLifestyleComponent } from './fashion-and-lifestyle.component';

describe('FashionAndLifestyleComponent', () => {
  let component: FashionAndLifestyleComponent;
  let fixture: ComponentFixture<FashionAndLifestyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionAndLifestyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionAndLifestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
