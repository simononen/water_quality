import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaldissolvedsolidsComponent } from './totaldissolvedsolids.component';

describe('TotaldissolvedsolidsComponent', () => {
  let component: TotaldissolvedsolidsComponent;
  let fixture: ComponentFixture<TotaldissolvedsolidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotaldissolvedsolidsComponent]
    });
    fixture = TestBed.createComponent(TotaldissolvedsolidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
