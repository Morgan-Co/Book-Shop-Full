import AboutMeCard from '@/components/about-me-card/AboutMeCard'
import ProfileInfo from '@/components/profile-info/ProfileInfo'


export default function UserProfile() {
	return (
		<div className={`grid grid-cols-[repeat(2,_minmax(0,_auto))] justify-between pt-[87px]`}>
			<ProfileInfo />
			<AboutMeCard />
		</div>
	)
}
