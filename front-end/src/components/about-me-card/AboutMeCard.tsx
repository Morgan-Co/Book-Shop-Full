'use client'

import { useProfile } from '@/hooks/useProfile'

import { userService } from '@/services/user.service'

const AboutMeCard = () => {
	const { data: profile } = useProfile()

	return (
		<div
			className={`w-[353px] h-[345px] bg-light-pink shadow-[0px_24px_36px_0px_#35315447]`}
		>
			<h3 className='text-[12px] font-bold leading-[15px] uppercase my-[17px] text-center'>
				About Me
			</h3>
			<form className='block'>
				<textarea
					className='w-[325px] h-[255px] mx-auto block border-none resize-none bg-transparent text-[12px] font-semibold leading-[15px] text-dark-gray outline-none'
					defaultValue={profile?.user.description}
					onBlur={async e => {
						if (profile) {
							userService.update({
								...profile.user,
								description: e.target.value
							})
						}
					}}
				/>
			</form>
		</div>
	)
}

export default AboutMeCard
