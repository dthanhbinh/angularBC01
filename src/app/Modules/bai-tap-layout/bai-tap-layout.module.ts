import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapLayoutComponent } from 'src/app/bai-tap-layout/bai-tap-layout.component';
import { ContentComponent } from 'src/app/bai-tap-layout/content/content.component';
import { FooterComponent } from 'src/app/bai-tap-layout/footer/footer.component';
import { HeaderComponent } from 'src/app/bai-tap-layout/header/header.component';
import { SidebarComponent } from 'src/app/bai-tap-layout/sidebar/sidebar.component';



@NgModule({
  declarations: [
    BaiTapLayoutComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BaiTapLayoutComponent
     //Xuất component ra để khi import module này vào module khác thì component này có thê sử dụng trong module khác
  ]
})
export class BaiTapLayoutModule { }
