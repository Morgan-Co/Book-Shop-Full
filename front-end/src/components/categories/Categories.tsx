'use client'

import { Montserrat } from 'next/font/google'
import Link from 'next/link'

import { useCategory } from '@/hooks/useCategory'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['500', '700']
})

const Categories = ({ category }: { category: string }) => {
	const { categories } = useCategory()

	return (
		<div
			className={`sm:flex lg:absolute -left-[200px] -top-[40px] z-0 lg:w-[416px] lg:h-[710px] bg-[#efeef6] flex justify-center items-center w-full h-fit lg:p-0 px-3 py-5 mb-5`}
		>
			<ul
				className={`flex lg:flex-col lg:gap-y-[23px] gap-x-[20px] gap-y-[20px] flex-wrap justify-center`}
			>
				{categories?.map(item => {
					return (
						<li
							key={item.id}
							className={`flex ${
								category === item.name &&
								'before:lg:block relative before:content-[""] before:hidden before:w-[6px] before:h-[6px] before:bg-[#756AD3] before:absolute before:-left-[15px] before:top-[5px] before:rounded-full'
							}`}
						>
							<Link
								href={item.name}
								className={`leading-[15px] bg-none border-none cursor-pointer w-full text-left hover:text-primary-purple capitalize ${
									montserrat.className
								}
								 ${
										category === item.name
											? 'text-[16px] text-dark-blue lg:font-bold'
											: 'lg:text-[14px] text-dark-gray font-medium text-[16px]'
									}
								 transition-all duration-200 ease
								`}
								type='button'
							>
								{item.name}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Categories
