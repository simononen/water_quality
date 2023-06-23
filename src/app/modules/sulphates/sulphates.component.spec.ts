import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SulphatesComponent } from './sulphates.component';

describe('SulphatesComponent', () => {
  let component: SulphatesComponent;
  let fixture: ComponentFixture<SulphatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SulphatesComponent]
    });
    fixture = TestBed.createComponent(SulphatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
