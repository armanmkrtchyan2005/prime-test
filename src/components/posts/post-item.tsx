import type { IPost } from '@/services/types'
import Link from 'next/link'
import type { FC } from 'react'
import { Button } from '../ui/button'

export const PostItem: FC<IPost> = ({ id, body, title }) => {
	return (
		<article className='h-full shadow hover:shadow-md transition-shadow p-4 rounded-xl flex flex-col'>
			<h2 className='font-bold text-xl text-center'>{title}</h2>
			<div className='mt-auto'>
				<p className='mt-5 text-justify'>{body}</p>
				<Link href={`/posts/${id}`} className='block mt-5'>
					<Button>Read More</Button>
				</Link>
			</div>
		</article>
	)
}
