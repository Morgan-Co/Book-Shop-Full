import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navLinks } from '@/constants/nav-links.constants'

const Nav = () => {
	const pathname = usePathname()
	return (
		<nav className={`max-w-[372px] w-full`}>
			<ul className={`flex justify-between flex-wrap`}>
				{navLinks.map(({ href, title }) => (
					<li
						className={`text-[10px] font-bold uppercase ${pathname === href ? 'text-dark-blue' : 'text-dark-gray'}`}
						key={title}
					>
						<Link href={href}>{title}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
