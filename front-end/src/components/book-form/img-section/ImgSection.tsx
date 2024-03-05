'use client'

import cn from 'clsx'
import Image from 'next/image'
import { ChangeEventHandler, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { ChooseImgDialog } from '@/components/book-form/choose-img-dialog/ChooseImgDialog'

import { IBook } from '@/types/book.types'

import NoImage from '@/../../public/NoImage.png'

const ImgSection = ({
	register,
	defaultUrl
}: {
	register: UseFormRegister<IBook>
	defaultUrl?: string | undefined
}) => {
	const [imageSrc, setImageSrc] = useState(defaultUrl)
	const handleImageChange: ChangeEventHandler<HTMLInputElement> = e => {
		if (!e.target.files) return
		const file = e.target.files[0]
		console.log(file)

		const reader = new FileReader()

		if (file) {
			reader.readAsDataURL(file)
		}

		reader.onload = () => {
			setImageSrc(reader.result as string)
		}
	}
	return (
		<div
			className={cn(
				`h-[300px] w-[212px] border-[2px] border-primary-purple border-dashed shadow-img-shadow relative`,
				'imgParent'
			)}
		>
			<ChooseImgDialog
				{...register('image')}
				onChange={handleImageChange}
			/>
			<Image
				src={imageSrc || NoImage}
				alt='Image'
				width={300}
				height={150}
				className={`w-full h-full`}
			/>
		</div>
	)
}

export default ImgSection
