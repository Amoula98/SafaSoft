import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedFormStatusComponent } from './completed-form-status.component';

describe('CompletedFormStatusComponent', () => {
  let component: CompletedFormStatusComponent;
  let fixture: ComponentFixture<CompletedFormStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedFormStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedFormStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
