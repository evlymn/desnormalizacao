import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoListComponent } from './cartao-list.component';

describe('CartaoListComponent', () => {
  let component: CartaoListComponent;
  let fixture: ComponentFixture<CartaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
