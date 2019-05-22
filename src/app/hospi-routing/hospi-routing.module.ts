import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CobenLibHospiComponent, CobenLibHospiModule } from '@coben-lib/hospi';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CobenLibHospiModule,
    RouterModule.forChild([{ path: '', component: CobenLibHospiComponent }])
  ],
  exports: [RouterModule]
})
export class HospiRoutingModule {}
