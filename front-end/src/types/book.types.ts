export interface IBook {
	id?: string
	name: string
	price: number
	description: string
	languageId: string
	currencyId: string
	categoryId: string
	authorId: string
	image: string
}

export interface ImageInterface {
	lastModified: number
	name: string
	type: string
	webkitRelativePath: string
	bookId?: string
	id?: string
}

export interface IConstructorSelect {
	id: string
	name: string
	acronym: string
}

export interface ICategory {
	name: string
	id: string
	createdAt: string
}

export interface IAuthor {
	firstName: string
	lastName: string
	id: string
	yearsActive: string
}

export interface IRating {
	value: EnumValue
	comment: string
	bookId: string
	userId: string
}

enum EnumValue {
	one = 1,
	two = 2,
	three = 3,
	four = 4,
	five = 5
}
