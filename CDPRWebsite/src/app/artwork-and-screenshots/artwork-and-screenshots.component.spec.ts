import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkAndScreenshotsComponent } from './artwork-and-screenshots.component';

describe('ArtworkAndScreenshotsComponent', () => {
  let component: ArtworkAndScreenshotsComponent;
  let fixture: ComponentFixture<ArtworkAndScreenshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtworkAndScreenshotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkAndScreenshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
