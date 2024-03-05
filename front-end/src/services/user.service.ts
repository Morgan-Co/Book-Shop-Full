import { IEditProfile, IUser } from '@/types/auth.types'

import { axiosWithAuth } from '@/api/interseptors'

class UserService {
	private BASE_URL = '/user/profile'

	async getProfile() {
		const response = await axiosWithAuth.get<{ user: IUser }>(this.BASE_URL)
		return response.data
	}

	async update(data: IEditProfile) {
		const response = await axiosWithAuth.put(this.BASE_URL, data)
		return response.data
	}

	async deleteProfile() {
		const response = await axiosWithAuth.delete(this.BASE_URL)
		return response.data
	}

}

export const userService = new UserService()
