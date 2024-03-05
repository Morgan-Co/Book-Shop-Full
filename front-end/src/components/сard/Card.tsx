'use client'

import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import {
	IAuthor,
	IBook,
	IConstructorSelect,
} from '@/types/book.types'

import { useAuthor } from '@/hooks/useAuthor'
import { useCurrency } from '@/hooks/useCurrency'
import { useRating } from '@/hooks/useRating'

import { formatPrice } from '@/utils/formatPrice'

import StarRating from '../utils/StarRating'

import CardButton from './card-button/CardButton'

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400'] })

const Card = ({ id, name, price, description, currencyId, image }: IBook) => {
	const { rating } = useRating(id!)
	const { currencies } = useCurrency(currencyId) as {
		currencies: IConstructorSelect
	}
	const { authors } = useAuthor('byId', id) as {
		authors: IAuthor[]
	}

	const formattedPrice = formatPrice(
		undefined,
		currencies?.acronym,
		currencies?.name,
		price
	)

	const middleRating = rating
		? Math.round(
				rating?.reduce((acc, rating) => acc + rating.value, 0) / rating.length
			)
		: 0

	return (
		<div className={`grid grid-cols-2 max-w-[424px] w-full h-[300px] bg-white`}>
			<div className={`shadow-main-shadow`}>
				<Image
					src={image}
					alt={name}
					width={212}
					height={300}
					className={`w-[212px] h-[300px]`}
				/>
			</div>
			<div className={`flex justify-end items-center w-full`}>
				<div
					className={`flex flex-col justify-between max-w-[176px] min-h-[203px]`}
				>
					<Link
						href={`/book/${id}`}
						className={`flex flex-col justify-between bg-none cursor-pointer bookLink`}
					>
						<h6
							className={`text-[10px] leading-[14px] text-dark-gray mb-[4px] text-start ${openSans.className}`}
						>
							{authors?.map(author => (
								<span key={author.id}>
									{author.firstName} {author.lastName}
								</span>
							))}
						</h6>
						<h4
							className={`text-[16px] leading-[20px] font-bold text-dark-blue line-clamp-1 overflow-hidden text-ellipsis transition-colors duration-100 ease text-start`}
						>
							{name}
						</h4>
					</Link>
					<div className={`flex gap-x-[6px] items-center`}>
						<div
							className={`text-star text-[12px] flex justify-center items-center`}
						>
							<StarRating rating={middleRating} />
						</div>
						<div
							className={`text-[10px] leading-[14px] text-dark-gray ${openSans.className}`}
						>
							{rating?.length} reviews
						</div>
					</div>
					<p
						className={`text-[10px] leading-[14px] text-dark-gray capitalize line-clamp-3 overflow-hidden text-ellipsis ${openSans.className}`}
					>
						{description}
					</p>
					<div
						className={`text-[13px] font-bold leading-[16px] text-dark-blue`}
					>
						{formattedPrice}
					</div>
					<CardButton id={id!} />
					{/* <Button
						onClick={async () => {
							return await userBooksService.addBookToCart(id!)
						}}
					>
						Buy Now
					</Button> */}
				</div>
			</div>
		</div>
	)
}

export default Card
