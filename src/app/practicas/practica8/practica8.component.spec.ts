import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica8Component } from './practica8.component';

describe('Practica8Component', () => {
  let component: Practica8Component;
  let fixture: ComponentFixture<Practica8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
