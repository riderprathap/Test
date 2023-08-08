import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapAmericaComponent } from './cap-america.component';

describe('CapAmericaComponent', () => {
  let component: CapAmericaComponent;
  let fixture: ComponentFixture<CapAmericaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapAmericaComponent]
    });
    fixture = TestBed.createComponent(CapAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
