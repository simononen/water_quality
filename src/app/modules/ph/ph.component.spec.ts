import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhComponent } from './ph.component';

describe('PhComponent', () => {
  let component: PhComponent;
  let fixture: ComponentFixture<PhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhComponent]
    });
    fixture = TestBed.createComponent(PhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
