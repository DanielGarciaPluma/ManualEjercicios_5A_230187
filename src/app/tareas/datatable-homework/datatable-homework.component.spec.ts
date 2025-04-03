import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableHomeworkComponent } from './datatable-homework.component';

describe('DatatableHomeworkComponent', () => {
  let component: DatatableHomeworkComponent;
  let fixture: ComponentFixture<DatatableHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatatableHomeworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatableHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
