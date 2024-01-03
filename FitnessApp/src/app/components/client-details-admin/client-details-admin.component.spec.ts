import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsAdminComponent } from './client-details-admin.component';

describe('ClientDetailsAdminComponent', () => {
  let component: ClientDetailsAdminComponent;
  let fixture: ComponentFixture<ClientDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientDetailsAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
