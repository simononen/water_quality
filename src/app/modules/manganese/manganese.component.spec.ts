import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManganeseComponent } from './manganese.component';

describe('ManganeseComponent', () => {
  let component: ManganeseComponent;
  let fixture: ComponentFixture<ManganeseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManganeseComponent]
    });
    fixture = TestBed.createComponent(ManganeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
