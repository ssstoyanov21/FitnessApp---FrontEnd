import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesListAdminComponent } from './exercises-list-admin.component';

describe('ExercisesListAdminComponent', () => {
  let component: ExercisesListAdminComponent;
  let fixture: ComponentFixture<ExercisesListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExercisesListAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExercisesListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
