import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Freights } from './freights';

describe('Freights', () => {
  let component: Freights;
  let fixture: ComponentFixture<Freights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Freights],
    }).compileComponents();

    fixture = TestBed.createComponent(Freights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
