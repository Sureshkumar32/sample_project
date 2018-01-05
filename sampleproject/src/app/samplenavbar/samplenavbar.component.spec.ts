import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplenavbarComponent } from './samplenavbar.component';

describe('SamplenavbarComponent', () => {
  let component: SamplenavbarComponent;
  let fixture: ComponentFixture<SamplenavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplenavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
