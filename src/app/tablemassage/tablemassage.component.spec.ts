import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablemassageComponent } from './tablemassage.component';

describe('TablemassageComponent', () => {
  let component: TablemassageComponent;
  let fixture: ComponentFixture<TablemassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablemassageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablemassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
