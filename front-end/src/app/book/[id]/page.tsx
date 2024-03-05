'use client'

import { PencilLine, SendHorizontal, Undo2 } from 'lucide-react'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/buttons/Button'
import { Textarea } from '@/components/ui/textarea/Textarea'
import StarRating from '@/components/utils/StarRating'
import CardButton from '@/components/сard/card-button/CardButton'

import { IAuthor, IConstructorSelect } from '@/types/book.types'

import { useAuthor } from '@/hooks/useAuthor'
import { useBook } from '@/hooks/useBook'
import { useCurrency } from '@/hooks/useCurrency'
import { useProfile } from '@/hooks/useProfile'
import { useRating } from '@/hooks/useRating'

import { formatPrice } from '@/utils/formatPrice'

import NoImage from '../../../../public/NoImage.png'

import { ratingService } from '@/services/rating.service'

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400'] })

interface Inputs {
	value: number
	comment: string
}

export default function Book({ params: { id } }: { params: { id: string } }) {
	const { data: book, isSuccess } = useBook(id)

	const { data: profile } = useProfile()
	const { rating } = useRating(id!)
	const { back, push } = useRouter()
	const { currencies } = useCurrency(book?.currencyId) as {
		currencies: IConstructorSelect
	}
	const { handleSubmit, register } = useForm<Inputs>()

	const [isButtonDisabled, setIsButtonDisabled] = useState(true)
	const { authors } = useAuthor('byId', id) as {
		authors: IAuthor[]
	}
	if (!book) return
	const middleRating = rating
		? Math.round(
				rating?.reduce((acc, rating) => acc + rating.value, 0) / rating.length
			)
		: 0

	const formattedPrice = formatPrice(
		undefined,
		currencies?.acronym,
		currencies?.name,
		book.price
	)



	const onSubmit: SubmitHandler<Inputs> = async data => {
		console.log(data)
		if (!profile) {
			push('/auth')
			return null
		}
		const response = await ratingService.createRating({
			...data,
			value: Number(data.value),
			bookId: id,
			userId: profile.user.id
		})

		return response
	}

	return (
		<div
			className={`flex justify-center relative border border-primary-purple p-6`}
		>
			{isSuccess && (
				<div className={`flex shadow-main-shadow relative`}>
					<div className={`shadow-main-shadow`}>
						<Image
							src={book.image}
							alt={book?.name}
							width={312}
							height={400}
							className={`w-[412px] h-[360px]`}
						/>
					</div>
					<div className={`flex ml-10 mt-6 w-full`}>
						<div
							className={`flex flex-col justify-between max-w-[276px] max-h-[300px]`}
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
								{book.name}
							</h4>
							<div className={`flex gap-x-[6px]`}>
								<div className={`text-[12px] flex justify-center items-center`}>
									<StarRating rating={middleRating} />
								</div>
								<div
									className={`text-[10px] leading-[14px] text-dark-gray flex items-center ${openSans.className}`}
								>
									{rating?.length} reviews
								</div>
							</div>
							<p
								className={`text-[10px] leading-[14px] text-dark-gray capitalize line-clamp-3 overflow-hidden text-ellipsis ${openSans.className}`}
							>
								{book.description}
							</p>
							<div
								className={`text-[13px] font-bold leading-[16px] text-dark-blue`}
							>
								{formattedPrice}
							</div>
							<CardButton id={id} />
							<form
								onSubmit={handleSubmit(onSubmit)}
								className={`flex max-h-20 gap-1`}
							>
								<Textarea
									className={`max-w-80 h-full`}
									placeholder='Enter comment'
									{...register('comment')}
									onChange={e => {
										setIsButtonDisabled(e.target.value.trim() === '')
									}}
								/>
								<div className={`flex flex-col gap-2`}>
									<button
										disabled={isButtonDisabled}
										className={`max-h-full h-full bg-primary-purple hover:bg-primary-purple/90 text-white w-8 flex justify-center
									items-center disabled:bg-primary-purple/70`}
									>
										<SendHorizontal className={`w-[20px] h-[20px]`} />
									</button>
									<select
										defaultValue={'5'}
										className={`cursor-pointer flex bg-white text-primary-purple border font-bold border-primary-purple`}
										{...register('value')}
									>
										<option value='5'>5</option>
										<option value='4'>4</option>
										<option value='3'>3</option>
										<option value='2'>2</option>
										<option value='1'>1</option>
									</select>
								</div>
							</form>
						</div>
					</div>
					<Link
						href={`/book/${id}/edit`}
						type='button'
						className={`flex absolute top-5 right-5 items-center text-[14px] justify-between font-bold text-primary-purple hover:text-primary-purple/70 transition`}
					>
						<PencilLine />
					</Link>
				</div>
			)}
			<button
				type='button'
				onClick={back}
				className={`flex absolute top-2 left-2 items-center text-[14px] w-[65px] justify-between font-bold text-primary-purple hover:text-primary-purple/70 transition`}
			>
				<Undo2 className={`block w-[20px] h-[20px]`} />
				<div className={`self-end h-fit`}>Back</div>
			</button>
		</div>
	)
}
