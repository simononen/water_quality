import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TupidityComponent } from './tupidity.component';

describe('TupidityComponent', () => {
  let component: TupidityComponent;
  let fixture: ComponentFixture<TupidityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TupidityComponent]
    });
    fixture = TestBed.createComponent(TupidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
