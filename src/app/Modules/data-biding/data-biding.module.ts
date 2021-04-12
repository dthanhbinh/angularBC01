import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { OneWayBidingComponent } from './one-way-biding/one-way-biding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';



@NgModule({
  declarations: [//Gắn component
    OneWayBidingComponent,
    TwoWayBindingComponent
  ],
  imports: [//Gắn module
    CommonModule,
    FormsModule
  ],
  exports:[OneWayBidingComponent,TwoWayBindingComponent]
})
export class DataBidingModule { }
