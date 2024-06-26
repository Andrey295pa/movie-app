import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelComponent } from './top-level.component';

describe('TopLevelComponent', () => {
  let component: TopLevelComponent;
  let fixture: ComponentFixture<TopLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopLevelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
