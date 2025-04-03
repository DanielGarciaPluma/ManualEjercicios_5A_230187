import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica8AuxComponent } from './practica8-aux.component';

describe('Practica8AuxComponent', () => {
  let component: Practica8AuxComponent;
  let fixture: ComponentFixture<Practica8AuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica8AuxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica8AuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
