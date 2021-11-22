import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaFattureComponent } from './visualizza-fatture.component';

describe('VisualizzaFattureComponent', () => {
  let component: VisualizzaFattureComponent;
  let fixture: ComponentFixture<VisualizzaFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
