export const formatPrice = (
	count: number = 1,
	acronym: string,
	name: string,
	price: number
) => {
	if (!acronym || !name) return
	const config = {
		style: 'currency',
		currency: acronym
	}
	return new Intl.NumberFormat(name, config).format(price * count)
}
