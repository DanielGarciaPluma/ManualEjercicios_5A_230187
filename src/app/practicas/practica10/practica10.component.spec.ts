import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica10Component } from './practica10.component';

describe('Practica10Component', () => {
  let component: Practica10Component;
  let fixture: ComponentFixture<Practica10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
