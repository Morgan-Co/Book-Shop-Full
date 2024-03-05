'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

import { IBook } from '@/types/book.types'

import { useDeleteUserBooks } from '@/hooks/useDeleteUserBooks'

import Author from './author/Author'
import Price from './price/Price'
import Rating from './rating/Rating'
import Title from './title/Title'

const CartItem = ({ name, price, image, id, currencyId }: IBook) => {
	const [count, setCount] = useState<number>(1)
	const { deleteUserBook } = useDeleteUserBooks()

	return (
		<div className={`flex items-center`}>
			<div className={`flex gap-x-[25.5px] w-[339px]`}>
				<div className={`shadow-[0px_24px_36px_0px_#35315447]`}>
					<Image
						src={image}
						alt={name}
						width={102.5}
						height={145}
						className={`w-[102.5px] h-[145px]`}
					/>
				</div>
				<div className={`flex justify-center items-center`}>
					<div className={`max-h-[53px] max-w-[176px]`}>
						<Title name={name} />
						<Author id={id!} />
						<Rating id={id!} />
					</div>
				</div>
			</div>
			<div className={`w-[373px]`}>
				<div className={`w-[176px] flex justify-between`}>
					<button
						className={`w-[28px] h-[28px] bg-none border-none cursor-pointer flex justify-center items-center font-bold`}
						onClick={() => {
							if (count === 1) {
								deleteUserBook(id!)
							}
							setCount(count - 1)
						}}
					>
						<FiMinus className={`w-full h-full`} />
					</button>
					<span
						className={`flex items-center text-[16px] font-bold leading-[20px]`}
					>
						{count}
					</span>
					<button
						className={`w-[28px] h-[28px] bg-none border-none cursor-pointer flex justify-center items-center font-bold`}
						onClick={() => {
							setCount(count + 1)
						}}
					>
						<FiPlus className={`w-full h-full`} />
					</button>
				</div>
			</div>
			<Price
				currencyId={currencyId}
				price={price}
				count={count}
			/>
			<div className={`text-[10px] font-bold leading-[12px] text-dark-gray`}>
				Shipping: delivery
			</div>
		</div>
	)
}

export default CartItem
