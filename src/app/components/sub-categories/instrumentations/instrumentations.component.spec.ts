import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentationsComponent } from './instrumentations.component';

describe('InstrumentationsComponent', () => {
  let component: InstrumentationsComponent;
  let fixture: ComponentFixture<InstrumentationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
