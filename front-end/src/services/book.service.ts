import { IBook } from '@/types/book.types'

import { axiosClassic } from '@/api/interseptors'

class BookService {
	private BASE_URL = '/book'

	async getBooks() {
		const response = await axiosClassic.get<IBook[]>(this.BASE_URL)
		return response.data
	}

	async getBooksWithCategory(id: string) {
		const response = await axiosClassic.get(`${this.BASE_URL}/category/${id}`)
		return response.data
	}

	async createBook(data: IBook) {
		const response = await axiosClassic.post(this.BASE_URL, data)
		return response.data
	}

	async getBook(id: string) {
		const response = await axiosClassic.get<IBook>(`${this.BASE_URL}/${id}`)
		return response.data
	}

	async updateBook(id: string, data: IBook) {
		const response = await axiosClassic.put(`${this.BASE_URL}/${id}`, data)
		return response.data as IBook
	}

	async deleteBook(id: string, ids: { authorId: string; categoryId: string }) {
		console.log(ids)

		const response = await axiosClassic.delete<IBook>(
			`${this.BASE_URL}/${id}`,
			{ data: { authorId: ids.authorId, categoryId: ids.categoryId } }
		)
		return response.data
	}
}

export const bookService = new BookService()
