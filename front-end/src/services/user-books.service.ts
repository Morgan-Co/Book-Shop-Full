import type { IBook } from '@/types/book.types'

import { axiosWithAuth } from '@/api/interseptors'

class UserBooksService {
	private BASE_URL = '/user-books'

	async getUserBooks() {
		const response = await axiosWithAuth.get<IBook[]>(this.BASE_URL)
		return response.data
	}

	async addBookToCart(id: string) {
		const response = await axiosWithAuth.post(this.BASE_URL, {
			bookId: id
		})
		return response.data
	}
	async removeUserBooks(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response.data
	}
}

export const userBooksService = new UserBooksService()
