import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica4Component } from './practica4.component';

describe('Practica4Component', () => {
  let component: Practica4Component;
  let fixture: ComponentFixture<Practica4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
