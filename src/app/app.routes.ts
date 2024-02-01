import { Routes } from '@angular/router'
import { authenticationGuard } from './modules'

export const routes: Routes = [
	{
		path: 'login',
		title: 'Login',
		loadComponent: () =>
			import('./page/login-page').then((m) => m.LoginPageComponent),
	},
	{
		path: 'home',
		title: 'Home',
		loadComponent: () =>
			import('./page/home-page').then((m) => m.HomePageComponent),
		canActivate: [authenticationGuard],
	},
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{
		path: '**',
		title: '404 Page Not Found',
		loadComponent: () =>
			import('./page/not-found-page').then((m) => m.NotFoundPageComponent),
	},
]
