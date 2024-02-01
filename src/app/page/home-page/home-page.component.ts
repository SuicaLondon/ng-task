import { Component, inject } from '@angular/core'
import { AuthenticationService, UiButtonComponent } from '../../modules'
import { Router } from '@angular/router'

@Component({
	selector: 'app-home-page',
	standalone: true,
	templateUrl: './home-page.component.html',
	imports: [UiButtonComponent],
})
export class HomePageComponent {
	authenticationService: AuthenticationService = inject(AuthenticationService)

	constructor(private router: Router) {}

	async logout() {
		console.log('logout')
		this.authenticationService.logout()
		this.router.navigate(['/login'])
	}
}
