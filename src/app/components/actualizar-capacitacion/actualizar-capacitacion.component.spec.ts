import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCapacitacionComponent } from './actualizar-capacitacion.component';

describe('ActualizarCapacitacionComponent', () => {
  let component: ActualizarCapacitacionComponent;
  let fixture: ComponentFixture<ActualizarCapacitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCapacitacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarCapacitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
