import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordToggleComponent } from './password-toggle-component';

describe('PasswordToggleComponent', () => {
  let component: PasswordToggleComponent;
  let fixture: ComponentFixture<PasswordToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordToggleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
