import { RotateCcw } from 'lucide-react'
import {
	FieldErrors,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
	UseFormReset
} from 'react-hook-form'

import DeleteDialog from '@/components/delete-dialog/DeleteDialog'
// import { SelectCurrency } from '@/components/select-currency/SelectCurrency'
// import { SelectLanguage } from '@/components/select-filed/SelectField'
import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { Textarea } from '@/components/ui/textarea/Textarea'

import { IAuthor, IBook, IConstructorSelect } from '@/types/book.types'

import { useAuthor } from '@/hooks/useAuthor'
import { useCategory } from '@/hooks/useCategory'
import { useCurrency } from '@/hooks/useCurrency'
import { useLanguage } from '@/hooks/useLanguage'

import { SelectField } from '../../select-filed/SelectField'

const FormSection = ({
	book,
	register,
	handleSubmit,
	onSubmit,
	errors,
	reset
}: {
	book?: IBook
	register: UseFormRegister<IBook>
	handleSubmit: UseFormHandleSubmit<IBook, IBook>
	onSubmit: SubmitHandler<IBook>
	errors: FieldErrors<IBook>
	reset: UseFormReset<IBook>
}) => {
	const { authors } = useAuthor('all') as { authors: IAuthor[] }
	const { languages } = useLanguage() as {
		languages: IConstructorSelect[]
	}
	const { categories } = useCategory()
	const { currencies } = useCurrency() as {
		currencies: IConstructorSelect[]
	}
	if (!authors) return
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`w-64`}
		>
			<label
				htmlFor='author'
				className={`block font-bold text-xs mb-[3px]`}
			>
				Author:
			</label>
			<select
				id='author'
				className={`w-full h-[35px] text-primary-purple bg-white border border-primary-purple font-bold text-xs pl-2 cursor-pointer mb-2`}
				defaultValue={authors[0].id}
				{...register('authorId')}
			>
				{authors?.map(option => (
					<option
						key={option.id}
						value={option.id}
					>
						{option.firstName} {option.lastName}
					</option>
				))}
			</select>
			<Field
				id='title'
				placeholder='title:'
				label='Title:'
				defaultValue={book?.name}
				{...register('name', {
					required: true
				})}
				state={errors.name && 'error'}
			/>
			<Field
				id='price'
				placeholder='price:'
				label='Price:'
				type='number'
				defaultValue={book?.price}
				{...register('price')}
			/>
			<Textarea
				placeholder='description:'
				{...register('description')}
				defaultValue={book?.description}
			/>
			<div className={`flex gap-4 justify-between mb-2 `}>
				<SelectField
					data={currencies}
					{...register('currencyId')}
				/>
				<SelectField
					data={languages}
					{...register('languageId')}
				/>
				<select
					{...register('categoryId')}
					className={`w-full h-[35px] text-primary-purple bg-white border border-primary-purple font-bold text-xs pl-2 cursor-pointer capitalize`}
				>
					{categories?.map(option => (
						<option
							key={option.id}
							value={option.id}
						>
							{option.name}
						</option>
					))}
				</select>
			</div>
			<Button
				type='submit'
				className={`w-full`}
			>
				{book ? 'Update' : 'Create'}
			</Button>
			<div className={`absolute top-2 right-2 flex gap-3`}>
				{book && <DeleteDialog book={book} />}
				<button
					onClick={() => {
						reset()
					}}
				>
					<RotateCcw
						className={`text-primary-purple hover:text-primary-purple/60`}
					/>
				</button>
			</div>
		</form>
	)
}

export default FormSection
