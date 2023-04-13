import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialityComponent } from './add-speciality.component';

describe('AddSpecialityComponent', () => {
  let component: AddSpecialityComponent;
  let fixture: ComponentFixture<AddSpecialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpecialityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
