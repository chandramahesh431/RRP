import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainpageComponent } from './blockchainpage.component';

describe('BlockchainpageComponent', () => {
  let component: BlockchainpageComponent;
  let fixture: ComponentFixture<BlockchainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
