import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoutComponent } from './fout.component';

describe('FoutComponent', () => {
  let component: FoutComponent;
  let fixture: ComponentFixture<FoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
