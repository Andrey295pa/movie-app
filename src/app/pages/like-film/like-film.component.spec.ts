import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeFilmComponent } from './like-film.component';

describe('LikeFilmComponent', () => {
  let component: LikeFilmComponent;
  let fixture: ComponentFixture<LikeFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeFilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LikeFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
