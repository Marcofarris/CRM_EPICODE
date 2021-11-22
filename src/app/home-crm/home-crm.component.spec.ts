import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCrmComponent } from './home-crm.component';

describe('HomeCrmComponent', () => {
  let component: HomeCrmComponent;
  let fixture: ComponentFixture<HomeCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
