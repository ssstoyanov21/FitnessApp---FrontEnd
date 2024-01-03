import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDetailsAdminComponent } from './exercise-details-admin.component';

describe('ExerciseDetailsAdminComponent', () => {
  let component: ExerciseDetailsAdminComponent;
  let fixture: ComponentFixture<ExerciseDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseDetailsAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciseDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
