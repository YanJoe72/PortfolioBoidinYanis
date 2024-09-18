import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioRelaisComponent } from './bio-relais.component';

describe('BioRelaisComponent', () => {
  let component: BioRelaisComponent;
  let fixture: ComponentFixture<BioRelaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BioRelaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BioRelaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
