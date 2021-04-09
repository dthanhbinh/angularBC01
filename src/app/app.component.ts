import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//Tên thẻ <app-root></app-root>
  //template: thành phần giao diện của thẻ
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']//Đường dẫn đến file css của thẻ
})

//Xử lý các nút trên giao diện của thẻ <app-root></app-root>
export class AppComponent {
  title = 'BC01Angular';
}
