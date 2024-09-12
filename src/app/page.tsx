import { PostItem } from '@/components/posts/post-item'
import { getPosts } from '@/services/get-posts'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Posts',
	description: 'Posts',
	openGraph: {
		type: 'website',
		title: 'Posts',
		description: 'posts',
	},
}

export default async function HomePage() {
	const posts = await getPosts()

	return (
		<main className='main-container'>
			<h1 className='font-bold text-3xl text-center'>Home</h1>
			<div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
				{posts.map(post => (
					<PostItem key={post.id} {...post} />
				))}
			</div>
		</main>
	)
}
