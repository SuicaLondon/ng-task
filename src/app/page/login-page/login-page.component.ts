import { NgIf } from '@angular/common'
import { Component, Input, inject } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import {
	AuthenticationService,
	LoginFormSchema,
	UiButtonComponent,
} from '../../modules'

@Component({
	selector: 'app-login-page',
	standalone: true,
	imports: [UiButtonComponent, ReactiveFormsModule, NgIf],
	templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
	authenticationService: AuthenticationService = inject(AuthenticationService)
	@Input() formValidationError: string | null
	loginForm: FormGroup = new FormGroup({
		username: new FormControl(''),
		password: new FormControl(''),
	})
	isLoading: boolean = false

	constructor(private router: Router) {
		this.formValidationError = null
	}

	async login() {
		const username = this.loginForm.value.username
		const password = this.loginForm.value.password
		const result = LoginFormSchema.safeParse({ username, password })
		if (!result.success) {
			this.formValidationError = result.error.issues[0].message
			console.error(result.error.issues)
			return
		}
		this.isLoading = true
		const success = await this.authenticationService.login(
			this.loginForm.value.username,
			this.loginForm.value.password
		)
		this.isLoading = false
		if (success) {
			this.router.navigate(['/home'])
		} else {
			// Change it to toast
			this.formValidationError = 'Login unsuccess'
		}
	}
}
