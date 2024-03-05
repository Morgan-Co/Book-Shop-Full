'use client'

import CartItem from '@/components/cart-item/CartItem'
import { Button } from '@/components/ui/buttons/Button'
import { basketParams } from '@/constants/basket-params.constants'

import { useBook } from '@/hooks/useBook'
import { useUserBooks } from '@/hooks/useUserBooks'

import { formatPrice } from '@/utils/formatPrice'

export default function ShopBasket() {
	const { userBooks } = useUserBooks()
	const totalPrice = userBooks?.reduce(
		(accumulator, currentValue) => accumulator + currentValue.price,
		0
	)

	return (
		<div>
			<h2
				className={`text-[24px] font-bold leading-[29px] text-dark-blue uppercase`}
			>
				Shopping Cart
			</h2>
			<div className={`flex justify-between max-w-[1050px]`}>
				{basketParams.map(param => (
					<div
						key={param.label}
						className={`text-[10px] font-bold leading-[12px] text-dark-gray uppercase`}
					>
						{param.label}
					</div>
				))}
			</div>
			<div className={`flex flex-col gap-y-[30px] mt-[30px] mb-[100px]`}>
				{userBooks?.map(book => (
					<CartItem
						key={book.id}
						{...book}
					/>
				))}
			</div>
			<div className={`block`}>
				<div
					className={`text-[24px] font-bold leading-[29px] text-dark-blue uppercase`}
				>
					Total Price: {totalPrice}
				</div>
				<Button>Checkout</Button>
			</div>
		</div>
	)
}
