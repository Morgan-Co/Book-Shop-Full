'use client'

import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ChangeEventHandler, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { VscSignOut } from 'react-icons/vsc'

import { IEditProfile } from '@/types/auth.types'

import { useProfile } from '@/hooks/useProfile'

import workingPeople from '../../../public/workingPeople.png'
import { Button } from '../ui/buttons/Button'
import { Field } from '../ui/fields/Field'
import { Heading } from '../ui/headings/Heading'

import { authService } from '@/services/auth.service'
import { userService } from '@/services/user.service'

const ProfileInfo = () => {
	const { data: profile } = useProfile()
	const { handleSubmit, register } = useForm<IEditProfile>()
	const onSubmit: SubmitHandler<IEditProfile> = async data => {
		const response = await userService.update(data)
		return response
	}
	const [formData, setFormData] = useState({
		name: profile?.user.name || '',
		email: profile?.user.email || ''
	})
	const [isFormChanged, setIsFormChanged] = useState(false)
	const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value
		}))
		setIsFormChanged(true)
	}

	return (
		<div className={`grid grid-rows-[repeat(3,_minmax(0,_auto))] self-start`}>
			<Heading title='Profile' />
			<div className='inline-flex gap-x-[17px]'>
				<Image
					src={workingPeople}
					alt='Working People'
				/>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col justify-between max-h-[215px]'
				>
					<Field
						id='name'
						label='Name:'
						defaultValue={profile?.user.name}
						{...register('name')}
						onChange={handleInputChange}
					/>
					<Field
						id='email'
						label='Email:'
						defaultValue={profile?.user.email}
						{...register('email')}
						onChange={handleInputChange}
					/>
					<Button
						disabled={!isFormChanged}
						onClick={() => console.log('kaban')}
					>
						Edit Profile
					</Button>
				</form>
			</div>
			<div className='w-full h-fit flex justify-between'>
				<Link
					href='/'
					onClick={async () => authService.logout()}
					className='font-bold text-dark-blue flex justify-center items-center gap-x-[10px] hover:text-[#181a1d]'
				>
					<VscSignOut className='w-[20px] h-[20px]' /> Sing Out
				</Link>
				<button
					type='button'
					className={`text-red`}
					onClick={async () => userService.deleteProfile()}
				>
					<Trash2 />
				</button>
			</div>
		</div>
	)
}

export default ProfileInfo
