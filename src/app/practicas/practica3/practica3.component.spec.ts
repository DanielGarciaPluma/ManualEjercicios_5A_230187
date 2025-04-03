import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica3Component } from './practica3.component';

describe('Practica3Component', () => {
  let component: Practica3Component;
  let fixture: ComponentFixture<Practica3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
