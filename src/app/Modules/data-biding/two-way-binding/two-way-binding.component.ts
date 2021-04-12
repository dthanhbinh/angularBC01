import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {
  username: string = ""
  email:string = ""
  color:string="red"
  constructor() { }

  ngOnInit(): void {
  }
  changeUserName(event:any){
    console.log(event.target.value);
    this.username = event.target.value;
  }

}
