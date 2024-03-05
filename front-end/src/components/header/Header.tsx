'use client'

import Image from 'next/image'
import Link from 'next/link'

import Nav from '../nav/Nav'
import UserSection from '../user-section/UserSection'

import Logo from '@/../public/Logo.svg'

const Header = () => {
	return (
		<header className={`flex h-[116px]`}>
			<div className={`container flex justify-between items-center`}>
				<Link href={`/`}>
					<Image
						src={Logo}
						alt='Logo'
					/>
				</Link>
				<Nav />
				<UserSection />
			</div>
		</header>
	)
}

export default Header
