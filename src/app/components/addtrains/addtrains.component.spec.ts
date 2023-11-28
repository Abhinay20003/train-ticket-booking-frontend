import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtrainsComponent } from './addtrains.component';

describe('AddtrainsComponent', () => {
  let component: AddtrainsComponent;
  let fixture: ComponentFixture<AddtrainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtrainsComponent]
    });
    fixture = TestBed.createComponent(AddtrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
