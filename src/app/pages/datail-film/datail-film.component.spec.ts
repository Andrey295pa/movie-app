import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailFilmComponent } from './datail-film.component';

describe('DatailFilmComponent', () => {
  let component: DatailFilmComponent;
  let fixture: ComponentFixture<DatailFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatailFilmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatailFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
