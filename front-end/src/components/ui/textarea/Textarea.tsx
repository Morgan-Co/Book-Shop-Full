import cn from 'clsx'
import { TextareaHTMLAttributes, forwardRef } from 'react'

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	disabled?: boolean
	className?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
	({ disabled, className, ...rest }, ref) => {
		return (
			<textarea
				disabled={disabled}
				className={cn(
					`w-full h-[100px] resize-none border-primary-purple border font-bold outline-none px-[9px] py-[10px] text-xs text-primary-purple mb-2`,
					className
				)}
				ref={ref}
				{...rest}
			/>
		)
	}
)

Textarea.displayName = 'textarea'
