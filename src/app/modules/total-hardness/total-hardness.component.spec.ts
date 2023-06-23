import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalHardnessComponent } from './total-hardness.component';

describe('TotalHardnessComponent', () => {
  let component: TotalHardnessComponent;
  let fixture: ComponentFixture<TotalHardnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalHardnessComponent]
    });
    fixture = TestBed.createComponent(TotalHardnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
