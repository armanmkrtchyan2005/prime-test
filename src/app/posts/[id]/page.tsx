import { getPost } from '@/services/get-post'
import { Metadata } from 'next'
import Link from 'next/link'

interface Props {
	params: { id: number }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { title, body } = await getPost(params.id)

	return {
		title,
		description: body,
		openGraph: {
			type: 'article',
			title,
			description: body,
		},
	}
}

export default async function PostPage({ params }: Props) {
	const post = await getPost(params.id)

	return (
		<main className='main-container'>
			<Link
				href={'/'}
				className='text-black hover:opacity-45 transition-opacity'
			>
				&larr; Go Back
			</Link>
			<div className='mt-10'>
				<h1 className='font-bold text-3xl text-center'>{post.title}</h1>
				<p className='text-justify mt-5'>{post.body}</p>
			</div>
		</main>
	)
}
