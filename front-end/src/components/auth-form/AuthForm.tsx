import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useState } from 'react'
import { SubmitHandler, set, useForm } from 'react-hook-form'

import { IAuthForm } from '@/types/auth.types'

import { SITE_PAGES } from '@/config/pages-url.config'

import { Button } from '../ui/buttons/Button'
import { Field } from '../ui/fields/Field'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs/Tabs'

import { authService } from '@/services/auth.service'

const AuthForm = ({
	setHeading
}: {
	setHeading: Dispatch<SetStateAction<string>>
}) => {
	const [isLoginForm, setIsLoginForm] = useState(true)
	const { push } = useRouter()
	const {
		handleSubmit,
		register,
		setError,
		formState: { errors }
	} = useForm<IAuthForm>()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: async (data: IAuthForm) => {
			const response = await authService.main(
				isLoginForm ? 'login' : 'register',
				data
			)
			if (response.message) {
				setError('root', { message: response.message[0] })
				return
			}
			push(SITE_PAGES.BOOKS)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = async data => {
		mutate(data)
	}

	return (
		<Tabs
			defaultValue='login'
			className={`h-full w-80 border border-primary-purple p-4 my-5 bg-light-purple/10 shadow-main-shadow`}
			onValueChange={e => setHeading(e)}
		>
			<TabsList className={`flex justify-between`}>
				<TabsTrigger
					onClick={() => setIsLoginForm(true)}
					value='login'
				>
					Sign In
				</TabsTrigger>
				<TabsTrigger
					onClick={() => setIsLoginForm(false)}
					value='register'
				>
					Sign Up
				</TabsTrigger>
			</TabsList>
			<span className={`block w-full h-[1px] bg-light-purple mt-2`}></span>
			<TabsContent
				value='login'
				className={``}
			>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={`grid h-52`}
				>
					<Field
						id='email'
						label='Email:'
						placeholder='Enter email'
						{...register('email')}
						state={errors.root?.message && 'error'}
					/>
					<div className={`relative`}>
						<Field
							id='password'
							label='Password:'
							placeholder='Enter password'
							type='password'
							{...register('password')}
							state={errors.root?.message && 'error'}
						/>
						<div
							className={`text-red text-[8px] font-bold leading-[10px] z-0 absolute w-full flex justify-center`}
						>
							{errors.root?.message}
						</div>
					</div>
					<Button className={`w-full self-end`}>Login</Button>
				</form>
			</TabsContent>
			<TabsContent value='register'>
				{' '}
				<form
					action=''
					onSubmit={handleSubmit(onSubmit)}
					className={`grid h-52`}
				>
					<Field
						id='email'
						label='Email:'
						placeholder='Enter email'
						{...register('email')}
						state={errors.root?.message ? 'error' : ''}
					/>
					<div className={`relative`}>
						<Field
							id='password'
							label='Password:'
							placeholder='Enter password'
							type='password'
							{...register('password')}
							state={errors.root?.message ? 'error' : ''}
						/>
						<div
							className={`text-red text-[8px] font-bold leading-[10px] z-0 absolute w-full flex justify-center`}
						>
							{errors.root?.message}
						</div>
					</div>
					<Button className={`w-full self-end`}>Register</Button>
				</form>
			</TabsContent>
		</Tabs>
	)
}

export default AuthForm
