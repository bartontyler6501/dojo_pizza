import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFrontComponent } from './order-front.component';

describe('OrderFrontComponent', () => {
  let component: OrderFrontComponent;
  let fixture: ComponentFixture<OrderFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
