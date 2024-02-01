import { Injectable } from '@angular/core'
import { AuthenticationEndpoint } from '../..'
import { User } from '../../models'

const TOKEN_KEY = 'TOKEN'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
	private token: string | null

	constructor() {
		// TODO: inject client
		this.token = localStorage.getItem(TOKEN_KEY)
	}

	private async mockLoginRequest(
		username: string,
		password: string
	): Promise<string | null> {
		const data = await fetch(AuthenticationEndpoint.login)
		const response = await data.json()
		const users = response as User[]
		return (
			users.find(
				(user) => user.username === username && user.password === password
			)?.token ?? null // Force convert to null
		)
	}

	async login(username: string, password: string): Promise<boolean> {
		try {
			// TODO: Move to interceptor of axios
			console.group('Login request')
			this.token = await this.mockLoginRequest(username, password)
			console.log('token: ', this.token)
			if (!this.token) {
				// TODO: Define class Error
				throw 'Token is not exist'
			}
			localStorage.setItem(TOKEN_KEY, this.token)
			console.groupEnd()
			return true
		} catch (error) {
			// Log to Sentry
			console.error(error)
			console.groupEnd()
			return false
		}
	}

	logout() {
		this.token = null
		localStorage.removeItem(TOKEN_KEY)
	}

	isAuthenTicated() {
		return this.token != null && this.token != ''
	}
}
