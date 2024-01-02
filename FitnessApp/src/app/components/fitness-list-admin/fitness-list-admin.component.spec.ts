import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessListAdminComponent } from './fitness-list-admin.component';

describe('FitnessListAdminComponent', () => {
  let component: FitnessListAdminComponent;
  let fixture: ComponentFixture<FitnessListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FitnessListAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FitnessListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
