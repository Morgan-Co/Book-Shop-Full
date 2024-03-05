import { ImagePlus } from 'lucide-react'
import { InputHTMLAttributes, forwardRef } from 'react'

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '../../ui/dialog/Dialog'
import { Field } from '../../ui/fields/Field'

const ChooseImgDialog = forwardRef<
	HTMLInputElement,
	InputHTMLAttributes<HTMLInputElement>
>(({ onChange, ...rest }, ref) => {
	return (
		<Dialog>
			<DialogTrigger
				className={`absolute top-0 left-0 flex justify-center items-center w-full h-full z-10`}
			>
				<ImagePlus className={`text-primary-purple w-[70px] h-[70px]`} />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Choose Image</DialogTitle>
				</DialogHeader>

				<Field
					id='img'
					label='Img Url:'
					placeholder='Img Url:'
				/>
				<input
					id='file'
					type='file'
					// className={`inputFile`}
					ref={ref}
					onChange={onChange}
					{...rest}
				/>
				{/* <label htmlFor='file'>Choose a file</label> */}
				<DialogClose>Save</DialogClose>
			</DialogContent>
		</Dialog>
	)
})

ChooseImgDialog.displayName = 'ChooseImgDialog'
export { ChooseImgDialog }
