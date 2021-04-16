import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap6-gio-hang',
  templateUrl: './bai-tap6-gio-hang.component.html',
  styleUrls: ['./bai-tap6-gio-hang.component.scss']
})
export class BaiTap6GioHangComponent implements OnInit {
  form: any =  {
    maSP : '',
    tenSP: '',
    giaSP:'',
  }
  products:any[]=[]
  total:number =0
  constructor() { }

  ngOnInit(): void {
  }
  addProduct(){
    console.log(this.form);
    this.products.push({...this.form})
    console.log(this.products)
    this.total =this.products.reduce((total,product)=>{
      return total += +product.giaSP
    },0)
    
  }
}
