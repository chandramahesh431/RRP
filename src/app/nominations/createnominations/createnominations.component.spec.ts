import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenominationsComponent } from './createnominations.component';

describe('CreatenominationsComponent', () => {
  let component: CreatenominationsComponent;
  let fixture: ComponentFixture<CreatenominationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenominationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
