import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessListComponent } from './fitness-list.component';

describe('FitnessListComponent', () => {
  let component: FitnessListComponent;
  let fixture: ComponentFixture<FitnessListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FitnessListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FitnessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
