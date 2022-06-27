import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHysComponent } from './crear-hys.component';

describe('CrearHysComponent', () => {
  let component: CrearHysComponent;
  let fixture: ComponentFixture<CrearHysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
