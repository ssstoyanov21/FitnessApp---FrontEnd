import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessDetailsAdminComponent } from './fitness-details-admin.component';

describe('FitnessDetailsAdminComponent', () => {
  let component: FitnessDetailsAdminComponent;
  let fixture: ComponentFixture<FitnessDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FitnessDetailsAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FitnessDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
