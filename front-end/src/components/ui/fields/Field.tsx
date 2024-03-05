import cn from 'clsx'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	id: string
	placeholder?: string
	disabled?: boolean
	type?: string
	state?: 'error' | 'success' | ''
	className?: string
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{ label, id, type, disabled, placeholder, state, className, ...rest },
		ref
	) => {
		return (
			<div className={`mb-3`}>
				<label
					htmlFor={id}
					className={`block font-bold text-xs selection:text-white mb-[3px]
					 ${state === 'error' && 'text-red selection:bg-red'}
					 `}
				>
					{label}
				</label>
				<input
					ref={ref}
					id={id}
					type={type}
					placeholder={placeholder}
					disabled={disabled}
					{...rest}
					className={cn(
						`w-full h-[35px] border border-primary-purple outline-none font-bold text-xs text-primary-purple px-[9px] py-[10px] selection:text-white selection:bg-primary-purple
					${
						disabled === true
							? 'border-primary-purple/60 text-primary-purple/60 selection:bg-primary-purple/60'
							: state === 'error'
								? 'text-red border-red placeholder:text-red/60 selection:bg-red'
								: state === 'success'
									? 'border-green-500 text-green-600'
									: ''
					}`,
						className
					)}
				/>
			</div>
		)
	}
)

Field.displayName = 'Field'
