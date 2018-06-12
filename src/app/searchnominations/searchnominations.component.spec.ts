import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchnominationsComponent } from './searchnominations.component';

describe('SearchnominationsComponent', () => {
  let component: SearchnominationsComponent;
  let fixture: ComponentFixture<SearchnominationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchnominationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchnominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
