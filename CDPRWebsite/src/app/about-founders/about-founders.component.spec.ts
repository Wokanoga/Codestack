import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFoundersComponent } from './about-founders.component';

describe('AboutFoundersComponent', () => {
  let component: AboutFoundersComponent;
  let fixture: ComponentFixture<AboutFoundersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFoundersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFoundersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
