import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NitritesComponent } from './nitrites.component';

describe('NitritesComponent', () => {
  let component: NitritesComponent;
  let fixture: ComponentFixture<NitritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NitritesComponent]
    });
    fixture = TestBed.createComponent(NitritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
