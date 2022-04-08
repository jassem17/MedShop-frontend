import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinsPansementsComponent } from './soins-pansements.component';

describe('SoinsPansementsComponent', () => {
  let component: SoinsPansementsComponent;
  let fixture: ComponentFixture<SoinsPansementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoinsPansementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoinsPansementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
