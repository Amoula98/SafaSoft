import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperSecondComponent } from './stepper-second.component';


describe('StepperSecondComponent', () => {
  let component: StepperSecondComponent;
  let fixture: ComponentFixture<StepperSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
