import { z } from 'zod'

export const LoginFormSchema = z.object({
	username: z
		.string()
		.min(4, { message: 'You must input at lease 4 character long' })
		.max(10, { message: 'You must input no more than 10 character long' }),
	password: z
		.string()
		.min(4, { message: 'You must input at lease 4 character long' })
		.max(10, { message: 'You must input no more than 10 character long' }),
})

export type LoginForm = z.infer<typeof LoginFormSchema>
export interface LoginRequest {
  username: string
  password: string
}
