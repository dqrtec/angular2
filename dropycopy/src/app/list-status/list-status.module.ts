import { StatusComponent } from './status/status.component';
import { ListStatusComponent } from './list-status.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStatusService } from './list-status.service';

@NgModule({
  declarations: [
    ListStatusComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ListStatusComponent,
  ],
  providers:[
    ListStatusService
  ]
})
export class ListStatusModule { }