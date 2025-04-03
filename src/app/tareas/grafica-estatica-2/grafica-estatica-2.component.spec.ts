import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaEstatica2Component } from './grafica-estatica-2.component';

describe('GraficaEstatica2Component', () => {
  let component: GraficaEstatica2Component;
  let fixture: ComponentFixture<GraficaEstatica2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaEstatica2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaEstatica2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});