import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CobenLibFinanceModule, CobenLibFinanceComponent, DetailsComponent } from '@coben-lib/finance';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CobenLibFinanceModule,
    RouterModule.forChild([
      { path: '', component: CobenLibFinanceComponent, children: [
        { path: 'details', component: DetailsComponent }
      ]}
    ])
  ],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
