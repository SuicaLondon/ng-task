import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthenticationService } from '../services'

export const authenticationGuard: CanActivateFn = () => {
	const authenticated = inject(AuthenticationService).isAuthenTicated()
	const router = inject(Router)
	if (!authenticated) {
		router.navigate(['/login'])
	}
	return authenticated
}
