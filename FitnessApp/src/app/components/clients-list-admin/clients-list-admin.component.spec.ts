import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsListAdminComponent } from './clients-list-admin.component';

describe('ClientsListAdminComponent', () => {
  let component: ClientsListAdminComponent;
  let fixture: ComponentFixture<ClientsListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsListAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
