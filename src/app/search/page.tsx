import { getPosts } from '@/services/get-posts'
import type { Metadata } from 'next'
import { FilteredPosts } from './filtered-posts'
import { Search } from './search'

export const metadata: Metadata = {
	title: 'Posts',
	description: 'Posts',
	openGraph: {
		type: 'website',
		title: 'Posts',
		description: 'posts',
	},
}

export default async function SearchPage() {
	const posts = await getPosts()

	return (
		<main className='main-container'>
			<h1 className='font-bold text-3xl text-center'>Search Posts</h1>
			<Search />
			<FilteredPosts posts={posts} />
		</main>
	)
}
