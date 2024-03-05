import { SelectHTMLAttributes, forwardRef } from 'react'

import { IConstructorSelect } from '@/types/book.types'


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	data: IConstructorSelect[]
}

const SelectField = forwardRef<HTMLSelectElement, SelectProps>(
	({ data, ...rest }, ref) => {
		if (!data) return
		return (
			<select
				ref={ref}
				{...rest}
				className={`w-full h-[35px] text-primary-purple bg-white border border-primary-purple font-bold text-xs pl-2 cursor-pointer`}
			>
				{data.map(option => (
					<option
						key={option.id}
						value={option.id}
					>
						{option.acronym}
					</option>
				))}
			</select>
		)
	}
)

SelectField.displayName = 'SelectFiled'

export { SelectField }
