import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnesiumHardnessComponent } from './magnesium-hardness.component';

describe('MagnesiumHardnessComponent', () => {
  let component: MagnesiumHardnessComponent;
  let fixture: ComponentFixture<MagnesiumHardnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MagnesiumHardnessComponent]
    });
    fixture = TestBed.createComponent(MagnesiumHardnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
