import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IBook } from '@/types/book.types'

import { useBook } from '@/hooks/useBook'
import { useCreateBook } from '@/hooks/useCreateBook'
import { useUpdateBook } from '@/hooks/useUpdateBook'

import FormSection from '../book-form/form-section/FormSection'
import ImgSection from '../book-form/img-section/ImgSection'

const BookForm = ({
	id,
	typeForm
}: {
	id?: string
	typeForm: 'create' | 'update'
}) => {
	const { data: book, isSuccess } = useBook(id!)
	const { mutate: updateBook } = useUpdateBook()
	const { mutate: createBook } = useCreateBook()
	const [defaultImg, setDefaultImg] = useState(book?.image!)
	console.log(book?.image)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IBook>({
		mode: 'onBlur'
	})
	const onSubmit: SubmitHandler<IBook> = async data => {
		const supabase = createClient(
			'https://begcpslinmhxdorgenrj.supabase.co',
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZ2Nwc2xpbm1oeGRvcmdlbnJqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwODc5NDg4MywiZXhwIjoyMDI0MzcwODgzfQ.bAJPnS_gsu6nWEFW-qZqFYq3GmPXXYAovFCPS8CqaSg'
		)

		if (id && typeForm === 'update') {
			if (data.image) {
				const { data: imgData } = await supabase.storage
					.from('book-images')
					.upload(`${Date.now()}`, data.image[0])
				setDefaultImg(
					`https://begcpslinmhxdorgenrj.supabase.co/storage/v1/object/public/book-images/${imgData?.path}`
				)
			}
			updateBook({
				id,
				data: {
					...data,
					price: Number(data.price),
					image: defaultImg
				}
			})
		} else if (typeForm === 'create') {
			const { data: imgData } = await supabase.storage
				.from('book-images')
				.upload(`${Date.now()}`, data.image[0])
			createBook({
				...data,
				price: Number(data.price),
				image: `https://begcpslinmhxdorgenrj.supabase.co/storage/v1/object/public/book-images/${imgData?.path}`
			})
		}
		reset()
	}
	return (
		<>
			{isSuccess && (
				<>
					<ImgSection
						defaultUrl={book.image}
						register={register}
					/>
					<FormSection
						book={book}
						register={register}
						handleSubmit={handleSubmit}
						onSubmit={onSubmit}
						errors={errors}
						reset={reset}
					/>
				</>
			)}
		</>
	)
}

export default BookForm
