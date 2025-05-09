import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigFormComponent } from './big-form.component';

describe('BigFormComponent', () => {
  let component: BigFormComponent;
  let fixture: ComponentFixture<BigFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
