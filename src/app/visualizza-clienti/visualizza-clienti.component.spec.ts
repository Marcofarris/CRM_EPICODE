import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaClientiComponent } from './visualizza-clienti.component';

describe('VisualizzaClientiComponent', () => {
  let component: VisualizzaClientiComponent;
  let fixture: ComponentFixture<VisualizzaClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
