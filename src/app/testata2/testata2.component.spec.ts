import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testata2Component } from './testata2.component';

describe('Testata2Component', () => {
  let component: Testata2Component;
  let fixture: ComponentFixture<Testata2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testata2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Testata2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
