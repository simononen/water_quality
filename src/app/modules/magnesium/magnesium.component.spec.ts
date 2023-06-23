import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnesiumComponent } from './magnesium.component';

describe('MagnesiumComponent', () => {
  let component: MagnesiumComponent;
  let fixture: ComponentFixture<MagnesiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MagnesiumComponent]
    });
    fixture = TestBed.createComponent(MagnesiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
