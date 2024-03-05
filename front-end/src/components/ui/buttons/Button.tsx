import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva('uppercase', {
	variants: {
		variant: {
			default:
				'w-[176px] h-[45px] bg-transparent text-primary-purple text-[8px] font-bold border-primary-purple border-[1px] border-solid hover:bg-[#dfdfdf] active:bg-[#b8b8b8] disabled:border-primary-purple/60 disabled:text-primary-purple/60 disabled:hover:bg-white',
			delete: `border-red text-red`,
			'sign-in': `w-full h-[32px] bg-light-purple font-bold text-[14px] text-white hover:bg-light-purple/90 transition`
			
		}
	},
	defaultVariants: {
		variant: 'default'
	}
})

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = 'Button'

export { Button, buttonVariants }
