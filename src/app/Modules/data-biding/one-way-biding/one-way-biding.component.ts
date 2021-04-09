import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-biding',
  templateUrl: './one-way-biding.component.html',
  styleUrls: ['./one-way-biding.component.scss']
})
export class OneWayBidingComponent implements OnInit {
  //Mo hình MVVM: Model view view model
  //Tất cả thuộc tính của component là state
  name:string = 'cybersoft'
  imgSrc:string = 'https://picsum.photos/200/200'
  constructor() { }
  showTitle =()=>{
    return 'CyberSoft bc01'
  }
  changeName=(value)=>{
    this.name=value
  }
  ngOnInit(): void {
  }

}
