import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalciumComponent } from './calcium.component';

describe('CalciumComponent', () => {
  let component: CalciumComponent;
  let fixture: ComponentFixture<CalciumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalciumComponent]
    });
    fixture = TestBed.createComponent(CalciumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
