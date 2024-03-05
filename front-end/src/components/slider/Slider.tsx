'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { sliderImages } from '@/constants/slider-images.constants'

const Slider = () => {
	const [imgIndex, setImgIndex] = useState(0)
	useEffect(() => {
		const interval = setInterval(() => {
			setImgIndex(prev => {
				if (prev === 2) return 0
				return prev + 1
			})
		}, 5000)

		return () => clearInterval(interval)
	}, [])
	return (
		<div className={`mb-[88px]`}>
			<div className={`flex overflow-hidden`}>
				{sliderImages.map(({ src, alt }) => (
					<Image
						key={alt}
						src={src}
						alt={alt}
						width={1120}
						height={702}
						style={{ translate: `${-100 * imgIndex}%`, transition: '200ms' }}
					/>
				))}
			</div>
			<div className={`flex justify-center gap-x-[10px] py-[17px]`}>
				{sliderImages.map((_, index) => (
					<div
						key={index}
						className={`w-[12px] h-[12px] rounded-full ${index === imgIndex ? 'bg-light-purple' : 'bg-gray'}`}
					></div>
				))}
			</div>
		</div>
	)
}

export default Slider
