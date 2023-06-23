import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilicaComponent } from './silica.component';

describe('SilicaComponent', () => {
  let component: SilicaComponent;
  let fixture: ComponentFixture<SilicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SilicaComponent]
    });
    fixture = TestBed.createComponent(SilicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
