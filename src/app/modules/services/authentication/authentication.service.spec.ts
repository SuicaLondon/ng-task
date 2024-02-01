import { TestBed } from '@angular/core/testing'

import { AuthenticationService } from './authentication.service'

describe('HousingService', () => {
	let service: AuthenticationService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.inject(AuthenticationService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})

	it('should be able to login with right username', async () => {
		expect(service).toBeTruthy()
		const success = await service.login('Suica', 'Aa123456')
		expect(success).toEqual(true)
	})

	it('should be able to storage token after login', async () => {
		expect(service).toBeTruthy()
		const success = await service.login('Suica', 'Aa123456')
		expect(success).toEqual(true)
		const isAuthenTicated = service.isAuthenTicated()
		expect(isAuthenTicated).toEqual(true)
	})

	it('should be able to return false when login with wrong username', async () => {
		expect(service).toBeTruthy()
		const success = await service.login('suica', 'Aa123456')
		expect(success).toEqual(false)
	})

	it('should be able to return false when login with wrong password', async () => {
		expect(service).toBeTruthy()
		const success = await service.login('Suica', '123456')
		expect(success).toEqual(false)
	})

	it('should be able to return false when login with wrong username and password', async () => {
		expect(service).toBeTruthy()
		const success = await service.login('suica', '123456')
		expect(success).toEqual(false)
	})

	it('should be able to return false when login with empty username', async () => {
		expect(service).toBeTruthy()
		const success = await service.login('', 'Aa123456')
		expect(success).toEqual(false)
	})

	it('should be able to return false when login with empty password', async () => {
		expect(service).toBeTruthy()
		const success = await service.login('Suica', '')
		expect(success).toEqual(false)
	})

	it('should be able to return false when login with empty username and password', async () => {
		expect(service).toBeTruthy()
		const success = await service.login('', '')
		expect(success).toEqual(false)
	})

	it('should be able to logout', async () => {
		expect(service).toBeTruthy()
		const success = await service.login('Suica', 'Aa123456')
		expect(success).toEqual(true)
		expect(service.isAuthenTicated()).toEqual(true)
		service.logout()
	})
	it('should be able to logout and clean token ', async () => {
		expect(service).toBeTruthy()
		const success = await service.login('Suica', 'Aa123456')
		expect(success).toEqual(true)
		expect(service.isAuthenTicated()).toEqual(true)
		service.logout()
		expect(service.isAuthenTicated()).toEqual(false)
	})
})
