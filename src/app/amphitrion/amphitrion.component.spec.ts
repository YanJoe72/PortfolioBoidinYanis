import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmphitrionComponent } from './amphitrion.component';

describe('AmphitrionComponent', () => {
  let component: AmphitrionComponent;
  let fixture: ComponentFixture<AmphitrionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmphitrionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmphitrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
