import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'new-ticket', component: FormPageComponent },
      { path: 'tickets', component: ListPageComponent },
      { path: 'details/:id', component: DetailsPageComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
