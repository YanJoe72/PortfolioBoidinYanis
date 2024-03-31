import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrateurSQLComponent } from './genrateur-sql.component';

describe('GenrateurSQLComponent', () => {
  let component: GenrateurSQLComponent;
  let fixture: ComponentFixture<GenrateurSQLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenrateurSQLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenrateurSQLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
