import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletedFormStatusComponent, DashBoardComponent } from './views';

const routes: Routes = [
  {path: '' , redirectTo: 'dashBoard', pathMatch: 'full'},
  {path: 'dashBoard' , component: DashBoardComponent},
  {path: 'succuss-operation' , component: CompletedFormStatusComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
