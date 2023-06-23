import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DissolvedOxygenComponent } from './dissolved-oxygen.component';

describe('DissolvedOxygenComponent', () => {
  let component: DissolvedOxygenComponent;
  let fixture: ComponentFixture<DissolvedOxygenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DissolvedOxygenComponent]
    });
    fixture = TestBed.createComponent(DissolvedOxygenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
