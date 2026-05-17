import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeFilmsComponent } from './like-films.component';

describe('LikeFilmsComponent', () => {
  let component: LikeFilmsComponent;
  let fixture: ComponentFixture<LikeFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeFilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LikeFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
