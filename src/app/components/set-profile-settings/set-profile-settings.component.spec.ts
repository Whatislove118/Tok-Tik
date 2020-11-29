import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProfileSettingsComponent } from './set-profile-settings.component';

describe('SetProfileSettingsComponent', () => {
  let component: SetProfileSettingsComponent;
  let fixture: ComponentFixture<SetProfileSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetProfileSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
