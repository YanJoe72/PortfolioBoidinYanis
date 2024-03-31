import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CesnacComponent } from './cesnac.component';

describe('CesnacComponent', () => {
  let component: CesnacComponent;
  let fixture: ComponentFixture<CesnacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CesnacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CesnacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
