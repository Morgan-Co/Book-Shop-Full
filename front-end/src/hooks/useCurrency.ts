import { useQuery } from '@tanstack/react-query'

import { IConstructorSelect } from '@/types/book.types'

import { currencyService } from '@/services/currency.service'

export function useCurrency(id?: string) {
	const { data: currencies } = useQuery({
		queryKey: ['currency', `${id ? id : ''}`],
		queryFn: async () => {
			if (id) {
				return await currencyService.getCurrency(id)
			}
			return currencyService.getAllCurrency()
		}
	})

	return { currencies }
}
