import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldablemtComponent } from './foldablemt.component';

describe('FoldablemtComponent', () => {
  let component: FoldablemtComponent;
  let fixture: ComponentFixture<FoldablemtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldablemtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldablemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
