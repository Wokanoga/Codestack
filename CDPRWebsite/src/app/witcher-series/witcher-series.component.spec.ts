import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WitcherSeriesComponent } from './witcher-series.component';

describe('WitcherSeriesComponent', () => {
  let component: WitcherSeriesComponent;
  let fixture: ComponentFixture<WitcherSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WitcherSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WitcherSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
