import { Open_Sans } from 'next/font/google'

import StarRating from '@/components/utils/StarRating'

import { useRating } from '@/hooks/useRating'

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'], weight: ['400'] })

const Rating = ({ id }: { id: string }) => {
	const { rating } = useRating(id!)

	const middleRating = rating
		? Math.round(
				rating?.reduce((acc, rating) => acc + rating.value, 0) / rating.length
			)
		: 0
	return (
		<div className={`flex gap-x-[6px]`}>
			<div className={`text-star text-[12px] flex justify-center items-center`}>
				<StarRating rating={middleRating} />
			</div>
			<div
				className={`text-[10px] leading-[14px] text-dark-gray ${openSans.className}`}
			>
				{rating?.length} reviews
			</div>
		</div>
	)
}

export default Rating
