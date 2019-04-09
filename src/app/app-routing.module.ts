import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SomeComponentComponent } from './some-component/some-component.component';

const routes: Routes = [
  { path: '', component: SomeComponentComponent },
  { path: 'finance', loadChildren: './finance-routing/finance-routing.module#FinanceRoutingModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
