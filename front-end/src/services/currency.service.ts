import { IConstructorSelect } from '@/types/book.types'

import { axiosClassic } from '@/api/interseptors'

class CurrencyService {
	private BASE_URL = '/currency'

	async getAllCurrency() {
		const response = await axiosClassic.get<IConstructorSelect[]>(this.BASE_URL)
		return response.data
	}

	async getCurrency(id: string) {
		const response = await axiosClassic.get<IConstructorSelect>(
			`${this.BASE_URL}/${id}`
		)
		return response.data
	}
}

export const currencyService = new CurrencyService()
