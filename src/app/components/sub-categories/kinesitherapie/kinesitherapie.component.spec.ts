import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinesitherapieComponent } from './kinesitherapie.component';

describe('KinesitherapieComponent', () => {
  let component: KinesitherapieComponent;
  let fixture: ComponentFixture<KinesitherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinesitherapieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinesitherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
