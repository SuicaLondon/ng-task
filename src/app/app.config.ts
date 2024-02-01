import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { AuthenticationService } from './modules'

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes), { provide: AuthenticationService }],
}
