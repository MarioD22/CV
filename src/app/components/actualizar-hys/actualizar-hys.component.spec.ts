import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarHysComponent } from './actualizar-hys.component';

describe('ActualizarHysComponent', () => {
  let component: ActualizarHysComponent;
  let fixture: ComponentFixture<ActualizarHysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarHysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarHysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
