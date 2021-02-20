import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardview1Component } from './cardview1.component';

describe('Cardview1Component', () => {
  let component: Cardview1Component;
  let fixture: ComponentFixture<Cardview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cardview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
