import { ICategory } from '@/types/book.types'

import { axiosClassic } from '@/api/interseptors'

class CategoryService {
	private BASE_URL = '/category'

	async getAll() {
		const response = await axiosClassic.get(this.BASE_URL)
		return response.data as ICategory[]
	}

	async getBookCategory(id: string) {
		const response = await axiosClassic.get(`${this.BASE_URL}/${id}`)
		return response.data as ICategory[]
	}
}

export const categoryService = new CategoryService()
