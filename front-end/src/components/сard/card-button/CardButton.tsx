'use client'

// import { useSession } from 'next-auth/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Montserrat } from 'next/font/google'
import React from 'react'

import { Button } from '@/components/ui/buttons/Button'

import { IBook } from '@/types/book.types'

// import { PrimaryButton } from '@/components/ui/Buttons'
import { useProfile } from '@/hooks/useProfile'
import { useUserBooks } from '@/hooks/useUserBooks'

import { formatPrice } from '@/utils/formatPrice'

import { userBooksService } from '@/services/user-books.service'

// import {
// 	addBookInBasket,
// 	deleteBookFromBasket
// } from '@/redux/features/books/booksSlice'
// import { togglePopup } from '@/redux/features/popup/popupSlice'
// import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const montserrat = Montserrat({
	subsets: ['latin', 'cyrillic'],
	weight: ['700']
})

const CardButton = ({ id }: { id: string }) => {
	// const session = useSession()
	// const dispatch = useAppDispatch()
	// const price = formatPrice(book)
	// const { books } = useAppSelector(state => state.books)
	const client = useQueryClient()
	const { mutate: removeBook } = useMutation({
		mutationKey: ['remove-user-book'],
		mutationFn: () => userBooksService.removeUserBooks(id),
		onSuccess: () => {
			client.invalidateQueries({
				queryKey: ['user-books']
			})
		}
	})

	const { mutate: addBook } = useMutation({
		mutationKey: ['add-user-book'],
		mutationFn: () => userBooksService.addBookToCart(id),
		onSuccess: () => {
			client.invalidateQueries({
				queryKey: ['user-books']
			})
		}
	})
	const { data: profile } = useProfile()
	const { userBooks } = useUserBooks()
	const InCart = () => {
		if (profile?.user) {
			if (!userBooks?.some(storageBook => storageBook.id === id)) {
				return (
					<Button
						onClick={() => {
							addBook()
						}}
					>
						Buy Now
					</Button>
				)
			} else {
				return (
					<button
						onClick={async () => {
							removeBook()
						}}
						className={`w-[176px] h-[45px] border-[#eeedf5] font-bold uppercase text-[8px] leading-[9.75px] text-dark-gray border-[1px] border-solid ${montserrat.className}`}
						type='button'
					>
						in the card
					</button>
				)
			}
		} else {
			return (
				<Button
				// func={() => {
				// 	// dispatch(togglePopup())
				// }}
				>
					Buy Now
				</Button>
			)
		}
	}

	return (
		<>
			{id !== 'no price' ? (
				InCart()
			) : (
				<div
					className={`max-w-full h-[45px] border-[#eeedf5] border-[1px] border-solid text-[8px] font-bold leading-[10px] bg-none text-red flex justify-center items-center`}
				>
					NOT FOR SALE
				</div>
			)}
		</>
	)
}

export default CardButton
