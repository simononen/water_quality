import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotassiumComponent } from './potassium.component';

describe('PotassiumComponent', () => {
  let component: PotassiumComponent;
  let fixture: ComponentFixture<PotassiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PotassiumComponent]
    });
    fixture = TestBed.createComponent(PotassiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
