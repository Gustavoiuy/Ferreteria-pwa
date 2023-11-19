import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmanualComponent } from './prmanual.component';

describe('PrmanualComponent', () => {
  let component: PrmanualComponent;
  let fixture: ComponentFixture<PrmanualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrmanualComponent]
    });
    fixture = TestBed.createComponent(PrmanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
