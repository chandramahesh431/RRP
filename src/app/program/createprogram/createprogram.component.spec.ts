import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateprogramComponent } from './createprogram.component';

describe('CreateprogramComponent', () => {
  let component: CreateprogramComponent;
  let fixture: ComponentFixture<CreateprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
