import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cyberpunk2077Component } from './cyberpunk2077.component';

describe('Cyberpunk2077Component', () => {
  let component: Cyberpunk2077Component;
  let fixture: ComponentFixture<Cyberpunk2077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cyberpunk2077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cyberpunk2077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
