import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlainingComponent } from './now-plaining.component';

describe('NowPlainingComponent', () => {
  let component: NowPlainingComponent;
  let fixture: ComponentFixture<NowPlainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NowPlainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NowPlainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
