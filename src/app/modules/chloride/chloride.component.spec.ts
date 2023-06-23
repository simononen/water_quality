import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChlorideComponent } from './chloride.component';

describe('ChlorideComponent', () => {
  let component: ChlorideComponent;
  let fixture: ComponentFixture<ChlorideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChlorideComponent]
    });
    fixture = TestBed.createComponent(ChlorideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
