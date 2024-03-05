'use client'

// import { signIn, useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthForm } from '@/types/auth.types'

import { Button } from '../ui/buttons/Button'
import { Field } from '../ui/fields/Field'

import ErrorMessage from './error-message/ErrorMessage'
import { authService } from '@/services/auth.service'

// import { EmailInput, PasswordInput } from '../ui/Inputs'
// import { Inputs } from '@/types/inputs'
// import ErrorMessage from './ErrorMessage/ErrorMessage'
// import { GoogleSignIn, SignInButton } from '../ui/Buttons'

const AuthCard = () => {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl') || '/profile'
	const router = useRouter()
	// console.log(useSession());

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError
	} = useForm<IAuthForm>({ mode: 'onBlur' })

	const onSubmit: SubmitHandler<IAuthForm> = async data => {
		const res = await authService.main('login', data)
		console.log(res)

		setError('root', { message: res.message[0] })
	}
	console.log(errors.root)

	return (
		<div
			className={`w-[241px] h-[312px] flex justify-center shadow-[0px_4px_4px_0px_#00000040] bg-white`}
		>
			<div className={`h-[250px] relative mt-[7px]`}>
				<h3
					className={`text-[16px] font-bold leading-[20px] text-dark-blue text-center mb-[14px]`}
				>
					Log in
				</h3>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={`flex flex-col items-center`}
				>
					<Field
						id='email'
						label='Email:'
						state={errors.root?.message && 'error'}
						{...register('email')}
					/>
					<Field
						id='password'
						label='Password:'
						state={errors.root?.message && 'error'}
						{...register('password')}
					/>
					<ErrorMessage errors={errors} />
					<div
						className={`flex justify-between max-w-[176px] w-full absolute bottom-0`}
					>
						<Button variant={'sign-in'}>Log In</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AuthCard
