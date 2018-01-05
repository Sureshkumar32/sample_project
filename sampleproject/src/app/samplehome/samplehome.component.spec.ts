import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplehomeComponent } from './samplehome.component';

describe('SamplehomeComponent', () => {
  let component: SamplehomeComponent;
  let fixture: ComponentFixture<SamplehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
