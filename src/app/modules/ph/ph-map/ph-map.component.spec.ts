import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhMapComponent } from './ph-map.component';

describe('PhMapComponent', () => {
  let component: PhMapComponent;
  let fixture: ComponentFixture<PhMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhMapComponent]
    });
    fixture = TestBed.createComponent(PhMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
