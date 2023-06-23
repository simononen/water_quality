import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeChlorideComponent } from './free-chloride.component';

describe('FreeChlorideComponent', () => {
  let component: FreeChlorideComponent;
  let fixture: ComponentFixture<FreeChlorideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeChlorideComponent]
    });
    fixture = TestBed.createComponent(FreeChlorideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
