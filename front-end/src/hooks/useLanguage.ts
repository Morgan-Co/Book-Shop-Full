import { useQuery } from '@tanstack/react-query'

import { IConstructorSelect } from '@/types/book.types'

import { languageService } from '@/services/language.service'

export function useLanguage() {
	const { data: languages } = useQuery({
		queryKey: ['language'],
		queryFn: () => languageService.getLanguage()
	})

	return { languages }
}
