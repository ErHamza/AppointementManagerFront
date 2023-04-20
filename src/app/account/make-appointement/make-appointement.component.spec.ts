import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAppointementComponent } from './make-appointement.component';

describe('MakeAppointementComponent', () => {
  let component: MakeAppointementComponent;
  let fixture: ComponentFixture<MakeAppointementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeAppointementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeAppointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
