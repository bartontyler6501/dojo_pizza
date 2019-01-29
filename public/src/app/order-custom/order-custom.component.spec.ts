import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCustomComponent } from './order-custom.component';

describe('OrderCustomComponent', () => {
  let component: OrderCustomComponent;
  let fixture: ComponentFixture<OrderCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
