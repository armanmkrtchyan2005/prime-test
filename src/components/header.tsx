import Link from 'next/link'
import { NavLink } from './nav-link'

const navLinks = [
	{ title: 'Home', path: '/' },
	{ title: 'Search', path: '/search' },
]

export const Header = () => {
	return (
		<header className='w-full fixed top-0 left-0 bg-white shadow py-5 z-40'>
			<nav className='container flex justify-between'>
				<div className='text-xl text-black'>
					<Link href={'/'}>Logo</Link>
				</div>
				<ul className='flex gap-5 items-center'>
					{navLinks.map((link, index) => (
						<li key={index}>
							<NavLink {...link} />
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
