import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabunComponent } from './sabun.component';

describe('SabunComponent', () => {
  let component: SabunComponent;
  let fixture: ComponentFixture<SabunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SabunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
