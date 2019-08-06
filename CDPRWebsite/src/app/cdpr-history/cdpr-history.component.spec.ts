import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDPRHistoryComponent } from './cdpr-history.component';

describe('CDPRHistoryComponent', () => {
  let component: CDPRHistoryComponent;
  let fixture: ComponentFixture<CDPRHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDPRHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDPRHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
