import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveProgramComponent } from './approve-program.component';

describe('ApproveProgramComponent', () => {
  let component: ApproveProgramComponent;
  let fixture: ComponentFixture<ApproveProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
