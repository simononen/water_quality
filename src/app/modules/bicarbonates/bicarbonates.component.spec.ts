import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicarbonatesComponent } from './bicarbonates.component';

describe('BicarbonatesComponent', () => {
  let component: BicarbonatesComponent;
  let fixture: ComponentFixture<BicarbonatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BicarbonatesComponent]
    });
    fixture = TestBed.createComponent(BicarbonatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
