import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishEditComponent } from './fish-edit.component';

describe('FishEditComponent', () => {
  let component: FishEditComponent;
  let fixture: ComponentFixture<FishEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
