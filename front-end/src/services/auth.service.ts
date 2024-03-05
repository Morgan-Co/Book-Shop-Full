import { axiosClassic } from '@/api/interseptors'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'
import { IAuthForm } from '@/types/auth.types'

class AuthService {
	async main(type: 'login' | 'register', data: IAuthForm) {
		try {
			const response = await axiosClassic.post(`/auth/${type}`, data)

			if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
			return response.data
		} catch (error: any) {
			if (error.response) {
				return error.response.data
			}
		}
	}
	async getNewTokens() {
		const response = await axiosClassic.post('/auth/login/access-token')

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}

	async logout() {
		const response = await axiosClassic.post<boolean>('/auth/logout')

		if (response.data) removeFromStorage()

		return response
	}
}

export const authService = new AuthService()
