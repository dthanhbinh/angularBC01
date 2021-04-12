import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  isActive: boolean=false
  isLogin: boolean =false
  color: string = ""
  students: any[]=[
    {name:"Bi", age:25},
    {name:"Bo", age:21} ,
    {name:"Tèo", age:19}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  changeColor (event:any){
    this.color = event.target.value
  }
}
