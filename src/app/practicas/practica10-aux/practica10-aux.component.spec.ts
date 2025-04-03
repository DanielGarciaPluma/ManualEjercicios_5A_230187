import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica10AuxComponent } from './practica10-aux.component';

describe('Practica10AuxComponent', () => {
  let component: Practica10AuxComponent;
  let fixture: ComponentFixture<Practica10AuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica10AuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica10AuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
