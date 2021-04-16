import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTap6GioHangComponent } from './bai-tap6-gio-hang.component';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    BaiTap6GioHangComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[BaiTap6GioHangComponent]
})
export class BaiTap6GioHangModule { }
