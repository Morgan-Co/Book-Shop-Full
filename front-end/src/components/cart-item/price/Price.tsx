import { IConstructorSelect } from '@/types/book.types'

import { useCurrency } from '@/hooks/useCurrency'

import { formatPrice } from '@/utils/formatPrice'

const Price = ({
	currencyId,
	price,
	count
}: {
	currencyId: string
	price: number
	count: number
}) => {
	const { currencies } = useCurrency(currencyId) as {
		currencies: IConstructorSelect
	}
	const formattedPrice = formatPrice(
		count,
		currencies?.acronym,
		currencies?.name,
		price
	)
	return (
		<div
			className={`text-[18px] font-bold leading-[22px] text-dark-blue w-[285px]`}
		>
			{formattedPrice}
		</div>
	)
}

export default Price
