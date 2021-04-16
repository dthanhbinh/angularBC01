import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap6GioHangComponent } from './bai-tap6-gio-hang.component';

describe('BaiTap6GioHangComponent', () => {
  let component: BaiTap6GioHangComponent;
  let fixture: ComponentFixture<BaiTap6GioHangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaiTap6GioHangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap6GioHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
