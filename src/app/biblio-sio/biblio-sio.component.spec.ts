import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblioSIOComponent } from './biblio-sio.component';

describe('BiblioSIOComponent', () => {
  let component: BiblioSIOComponent;
  let fixture: ComponentFixture<BiblioSIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiblioSIOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiblioSIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
