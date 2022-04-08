import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dafalgan1gComponent } from './dafalgan1g.component';

describe('Dafalgan1gComponent', () => {
  let component: Dafalgan1gComponent;
  let fixture: ComponentFixture<Dafalgan1gComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dafalgan1gComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dafalgan1gComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
