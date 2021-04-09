import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneWayBidingComponent } from './one-way-biding/one-way-biding.component';



@NgModule({
  declarations: [
    OneWayBidingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[OneWayBidingComponent]
})
export class DataBidingModule { }
