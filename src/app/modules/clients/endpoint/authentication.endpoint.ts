import { HOST_DEV } from '../host'

export class AuthenticationEndpoint {
	/// Endpoint for login
	/// TODO: single instance and return a fetch instance for each method
	/// TODO: separate the endpoint with method
	static login: string = HOST_DEV + '/users' // This endpoint just for mocking /login
	static register: string = HOST_DEV + '/users' // This endpoint just for mocking /login
	static validateToken: string = HOST_DEV + '/users' // This endpoint just for mocking /validateToken
}
