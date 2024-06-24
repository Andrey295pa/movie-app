import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularFilmComponent } from './popular-film.component';

describe('PopularFilmComponent', () => {
  let component: PopularFilmComponent;
  let fixture: ComponentFixture<PopularFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularFilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
