'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

export interface NavLinkProps {
	title: string
	path: string
}

export const NavLink: FC<NavLinkProps> = ({ title, path }) => {
	const pathname = usePathname()

	return (
		<Link
			href={path}
			className={`text-black hover:opacity-45 transition-opacity ${
				pathname === path ? 'opacity-45' : ''
			}`}
		>
			{title}
		</Link>
	)
}
