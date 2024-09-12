import { getPost } from '@/services/get-post'
import Link from 'next/link'

export default async function PostPage({ params }: { params: { id: number } }) {
	const post = await getPost(params.id)

	return (
		<main className='main-container'>
			<Link
				href={'/'}
				className='text-black hover:opacity-45 transition-opacity'
			>
				&larr; Go Back
			</Link>
			<h1 className='font-bold text-3xl text-center'>{post.title}</h1>
			<p>{post.body}</p>
		</main>
	)
}
