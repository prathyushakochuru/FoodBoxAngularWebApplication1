import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductspublicComponent } from './productspublic.component';

describe('ProductspublicComponent', () => {
  let component: ProductspublicComponent;
  let fixture: ComponentFixture<ProductspublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductspublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductspublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
