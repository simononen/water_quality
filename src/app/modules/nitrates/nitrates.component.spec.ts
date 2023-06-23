import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NitratesComponent } from './nitrates.component';

describe('NitratesComponent', () => {
  let component: NitratesComponent;
  let fixture: ComponentFixture<NitratesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NitratesComponent]
    });
    fixture = TestBed.createComponent(NitratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
