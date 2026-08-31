import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateilFilmComponent } from './datail-film.component';

describe('DatailFilmComponent', () => {
  let component: DateilFilmComponent;
  let fixture: ComponentFixture<DateilFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateilFilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateilFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
