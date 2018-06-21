import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoFormComponent } from './cartao-form.component';

describe('CartaoFormComponent', () => {
  let component: CartaoFormComponent;
  let fixture: ComponentFixture<CartaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
