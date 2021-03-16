import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoitComponent } from './foit.component';

describe('FoitComponent', () => {
  let component: FoitComponent;
  let fixture: ComponentFixture<FoitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
