import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BaiTapLayoutComponent } from './bai-tap-layout/bai-tap-layout.component';
import { HeaderComponent } from './bai-tap-layout/header/header.component';
import { FooterComponent } from './bai-tap-layout/footer/footer.component';
import { ContentComponent } from './bai-tap-layout/content/content.component';
import { SidebarComponent } from './bai-tap-layout/sidebar/sidebar.component';
import { BaiTapLayoutModule } from './Modules/bai-tap-layout/bai-tap-layout.module';
import { OneWayBidingComponent } from './Modules/data-biding/one-way-biding/one-way-biding.component';
import { DataBidingModule } from './Modules/data-biding/data-biding.module';

@NgModule({

  declarations: [//Các thẻ có thể sử dụng được cho module này
    AppComponent,
    DemoComponent,
   
  ],
  imports: [//Các module khác muốn sử dụng được trong module này phải import vào
    BrowserModule,
    BaiTapLayoutModule,
    DataBidingModule
  ],
  providers: [],//Nơi chứa cácc service muốn sử dụng đc cho module này khai báo tại đây
  bootstrap: [AppComponent]//Các component sử dụng được trong file index.html
})
export class AppModule { }
