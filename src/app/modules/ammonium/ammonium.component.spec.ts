import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmoniumComponent } from './ammonium.component';

describe('AmmoniumComponent', () => {
  let component: AmmoniumComponent;
  let fixture: ComponentFixture<AmmoniumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmmoniumComponent]
    });
    fixture = TestBed.createComponent(AmmoniumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
