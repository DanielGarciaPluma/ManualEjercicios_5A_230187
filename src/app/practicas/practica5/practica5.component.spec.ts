import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica5Component } from './practica5.component';

describe('Practica5Component', () => {
  let component: Practica5Component;
  let fixture: ComponentFixture<Practica5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
