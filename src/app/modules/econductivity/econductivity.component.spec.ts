import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconductivityComponent } from './econductivity.component';

describe('EconductivityComponent', () => {
  let component: EconductivityComponent;
  let fixture: ComponentFixture<EconductivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EconductivityComponent]
    });
    fixture = TestBed.createComponent(EconductivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
