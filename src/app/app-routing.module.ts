import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './views';

const routes: Routes = [
  {path: '' , redirectTo: 'dashBoard', pathMatch: 'full'},
  {path: 'dashBoard' , component: DashBoardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
