import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifftableComponent } from './difftable.component';

describe('DifftableComponent', () => {
  let component: DifftableComponent;
  let fixture: ComponentFixture<DifftableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifftableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifftableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
