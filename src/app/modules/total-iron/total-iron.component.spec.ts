import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalIronComponent } from './total-iron.component';

describe('TotalIronComponent', () => {
  let component: TotalIronComponent;
  let fixture: ComponentFixture<TotalIronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalIronComponent]
    });
    fixture = TestBed.createComponent(TotalIronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
