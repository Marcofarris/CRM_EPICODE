import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiepagComponent } from './piepag.component';

describe('PiepagComponent', () => {
  let component: PiepagComponent;
  let fixture: ComponentFixture<PiepagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiepagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiepagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
