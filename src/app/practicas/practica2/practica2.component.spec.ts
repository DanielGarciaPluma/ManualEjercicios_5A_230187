import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica2Component } from './practica2.component';

describe('Practica2Component', () => {
  let component: Practica2Component;
  let fixture: ComponentFixture<Practica2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
