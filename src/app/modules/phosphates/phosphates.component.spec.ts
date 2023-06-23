import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhosphatesComponent } from './phosphates.component';

describe('PhosphatesComponent', () => {
  let component: PhosphatesComponent;
  let fixture: ComponentFixture<PhosphatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhosphatesComponent]
    });
    fixture = TestBed.createComponent(PhosphatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
