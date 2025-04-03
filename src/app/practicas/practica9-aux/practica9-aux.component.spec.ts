import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica9AuxComponent } from './practica9-aux.component';

describe('Practica9AuxComponent', () => {
  let component: Practica9AuxComponent;
  let fixture: ComponentFixture<Practica9AuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica9AuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica9AuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
