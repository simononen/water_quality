import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAlkalinityComponent } from './total-alkalinity.component';

describe('TotalAlkalinityComponent', () => {
  let component: TotalAlkalinityComponent;
  let fixture: ComponentFixture<TotalAlkalinityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalAlkalinityComponent]
    });
    fixture = TestBed.createComponent(TotalAlkalinityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
