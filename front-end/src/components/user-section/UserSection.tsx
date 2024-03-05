'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { useProfile } from '@/hooks/useProfile'
import { useUserBooks } from '@/hooks/useUserBooks'

import Cart from '../../../public/Cart.svg'
import AuthCard from '../auth-card/AuthCard'

import Profile from '@/../public/Profile.svg'

const UserSection = () => {
	const { data: profile } = useProfile()
	const { userBooks } = useUserBooks()

	const [isOpen, setIsOpen] = useState(false)
	const [isCursorOverPopup, setCursorOverPopup] = useState<boolean>(false)
	useEffect(() => {
		if (!isCursorOverPopup && isOpen) {
			const timeout = setTimeout(() => {
				setIsOpen(false)
			}, 2000)

			return () => {
				clearTimeout(timeout)
			}
		}
	}, [isCursorOverPopup, isOpen])
	return (
		<div className={`flex justify-between max-w-[121px] w-full relative`}>
			{profile?.user ? (
				<Link href={'/profile'}>
					<Image
						src={Profile}
						alt='Profile'
					/>
				</Link>
			) : (
				<button
					onClick={() => {
						setIsOpen(true)
					}}
				>
					<Image
						src={Profile}
						alt='Profile'
					/>
				</button>
			)}
			<Link
				href={`/cart`}
				className={`relative`}
			>
				<Image
					src={Cart}
					alt='Cart'
				/>
				{userBooks && userBooks.length > 0 && (
					<span
						className={`absolute top-[9px] left-[5px] w-[13px] h-[13px] bg-red rounded-full text-white text-[10px] leading-[12px] font-medium flex justify-center items-center`}
					>
						{userBooks?.length}
					</span>
				)}
			</Link>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, translateY: '50px' }}
						animate={{ opacity: 1, translateY: 0 }}
						exit={{ opacity: 0 }}
						className={`absolute top-[35px] -left-[115px] z-20`}
						onMouseEnter={() => {
							setCursorOverPopup(true)
						}}
						onMouseLeave={() => {
							setCursorOverPopup(false)
						}}
					>
						<AuthCard />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default UserSection
