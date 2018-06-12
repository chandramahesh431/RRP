import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHRPersonelComponent } from './add-hrpersonel.component';

describe('AddHRPersonelComponent', () => {
  let component: AddHRPersonelComponent;
  let fixture: ComponentFixture<AddHRPersonelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHRPersonelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHRPersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
