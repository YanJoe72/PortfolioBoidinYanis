import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmonetiquetteComponent } from './cmonetiquette.component';

describe('CmonetiquetteComponent', () => {
  let component: CmonetiquetteComponent;
  let fixture: ComponentFixture<CmonetiquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CmonetiquetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmonetiquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
