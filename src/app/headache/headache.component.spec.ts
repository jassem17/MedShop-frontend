import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadacheComponent } from './headache.component';

describe('HeadacheComponent', () => {
  let component: HeadacheComponent;
  let fixture: ComponentFixture<HeadacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
