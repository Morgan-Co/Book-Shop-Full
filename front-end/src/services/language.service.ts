import { IConstructorSelect } from '@/types/book.types'

import { axiosClassic } from '@/api/interseptors'

class LanguageService {
	private BASE_URL = '/language'

	async getLanguage() {
		const response = await axiosClassic.get<IConstructorSelect[]>(this.BASE_URL)
		return response.data
	}
}

export const languageService = new LanguageService()
