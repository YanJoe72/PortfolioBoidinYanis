import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2lComponent } from './m2l.component';

describe('M2lComponent', () => {
  let component: M2lComponent;
  let fixture: ComponentFixture<M2lComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [M2lComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(M2lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
