'use client'

import React, { useState } from 'react'

import AuthForm from '@/components/auth-form/AuthForm'
import { Heading } from '@/components/ui/headings/Heading'

export default function Auth() {
	const [heading, setHeading] = useState('Login')

	return (
		<>
			<Heading title={heading} />
			<div className={`flex justify-center border-[2px] border-dashed border-primary-purple`}>
				<AuthForm setHeading={setHeading} />
			</div>
		</>
	)
}
