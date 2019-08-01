import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOneComponent } from './child-one.component';

describe('ChildOneComponent', () => {
  let component: ChildOneComponent;
  let fixture: ComponentFixture<ChildOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildOneComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
