import { FaRegStar, FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'

const StarRating = ({ rating }: { rating: number | null }) => {
	if (rating) {
		const fullStars = Math.floor(rating)
		const halfStar = rating - fullStars
		const stars = []
		for (let i = 0; i < fullStars; i++) {
			stars.push(<FaStar className='block w-full h-full text-yellow' />)
		}
		if (halfStar >= 0.5) {
			stars.push(
				<FaRegStarHalfStroke className='block w-full h-full text-yellow' />
			)
		}
		const emptyStars = 5 - Math.ceil(rating)
		for (let i = 0; i < emptyStars; i++) {
			stars.push(<FaRegStar className='block w-full h-full text-yellow' />)
		}
		return (
			<>
				{stars.map((star, index) => (
					<span
						className='block'
						key={index}
					>
						{star}
					</span>
				))}
			</>
		)
	}
	return (
		<div
			className={`text-[10px] leading-[14px] text-dark-gray flex items-center`}
		>
			no rating
		</div>
	)
}

export default StarRating
