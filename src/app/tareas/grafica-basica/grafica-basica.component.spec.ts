import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaBasicaComponent } from './grafica-basica.component';

describe('GraficaBasicaComponent', () => {
  let component: GraficaBasicaComponent;
  let fixture: ComponentFixture<GraficaBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaBasicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
