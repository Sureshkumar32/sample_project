import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleaboutComponent } from './sampleabout.component';

describe('SampleaboutComponent', () => {
  let component: SampleaboutComponent;
  let fixture: ComponentFixture<SampleaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
