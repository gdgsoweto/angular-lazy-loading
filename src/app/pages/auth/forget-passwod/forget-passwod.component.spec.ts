import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswodComponent } from './forget-passwod.component';

describe('ForgetPasswodComponent', () => {
  let component: ForgetPasswodComponent;
  let fixture: ComponentFixture<ForgetPasswodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPasswodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
