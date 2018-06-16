import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirlsComponent } from './girls/girls.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { GirlDetailComponent } from './girl-detail/girl-detail.component'

// 必须写在最上面
const routes: Routes = [
	{
		path: 'girls',
		component: GirlsComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'detail/:id',
		component: GirlDetailComponent
	}
];

@NgModule({
  // 干嘛用的
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})



export class AppRoutingModule {}
