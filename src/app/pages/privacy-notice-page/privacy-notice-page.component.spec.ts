import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyNoticePageComponent } from './privacy-notice-page.component';

describe('PrivacyNoticePageComponent', () => {
  let component: PrivacyNoticePageComponent;
  let fixture: ComponentFixture<PrivacyNoticePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyNoticePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyNoticePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
