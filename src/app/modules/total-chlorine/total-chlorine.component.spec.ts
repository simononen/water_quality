import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalChlorineComponent } from './total-chlorine.component';

describe('TotalChlorineComponent', () => {
  let component: TotalChlorineComponent;
  let fixture: ComponentFixture<TotalChlorineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalChlorineComponent]
    });
    fixture = TestBed.createComponent(TotalChlorineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
