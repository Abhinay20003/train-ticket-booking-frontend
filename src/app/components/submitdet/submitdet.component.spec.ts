import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitdetComponent } from './submitdet.component';

describe('SubmitdetComponent', () => {
  let component: SubmitdetComponent;
  let fixture: ComponentFixture<SubmitdetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitdetComponent]
    });
    fixture = TestBed.createComponent(SubmitdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
