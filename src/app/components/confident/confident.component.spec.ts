import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentComponent } from './confident.component';

describe('ConfidentComponent', () => {
  let component: ConfidentComponent;
  let fixture: ComponentFixture<ConfidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
