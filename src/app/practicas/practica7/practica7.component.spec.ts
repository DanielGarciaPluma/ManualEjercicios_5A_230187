import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica7Component } from './practica7.component';

describe('Practica7Component', () => {
  let component: Practica7Component;
  let fixture: ComponentFixture<Practica7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
