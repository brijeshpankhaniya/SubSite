import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubSiteComponent } from './add-sub-site.component';

describe('AddSubSiteComponent', () => {
  let component: AddSubSiteComponent;
  let fixture: ComponentFixture<AddSubSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
