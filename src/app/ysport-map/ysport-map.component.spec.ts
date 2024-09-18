import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YSportMapComponent } from './ysport-map.component';

describe('YSportMapComponent', () => {
  let component: YSportMapComponent;
  let fixture: ComponentFixture<YSportMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YSportMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YSportMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
