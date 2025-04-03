import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica9Component } from './practica9.component';

describe('Practica9Component', () => {
  let component: Practica9Component;
  let fixture: ComponentFixture<Practica9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
