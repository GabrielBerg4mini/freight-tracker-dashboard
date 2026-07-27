import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLogoComponent } from './logo-component';

describe('AppLogoComponent', () => {
  let component: AppLogoComponent;
  let fixture: ComponentFixture<AppLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppLogoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
