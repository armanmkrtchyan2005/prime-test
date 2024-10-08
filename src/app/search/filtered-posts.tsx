'use client'

import { PostItem } from '@/components/posts/post-item'
import type { IPost } from '@/services/types'
import { useSearchParams } from 'next/navigation'
import type { FC } from 'react'
import { useEffect, useMemo, useState } from 'react'

function searchFromPosts(posts: IPost[], query: string | null) {
	return posts.filter(
		post =>
			post.title.toLowerCase().includes(query?.toLowerCase() || '') ||
			post.body.toLowerCase().includes(query?.toLowerCase() || '')
	)
}

export interface FilteredPostsProps {
	posts: IPost[]
}

export const FilteredPosts: FC<FilteredPostsProps> = ({ posts }) => {
	const searchParams = useSearchParams()

	const query = useMemo(() => searchParams.get('q'), [searchParams])

	const [searchedPosts, setSearchedPosts] = useState<IPost[]>(() =>
		searchFromPosts(posts, query)
	)

	useEffect(() => {
		setSearchedPosts(searchFromPosts(posts, query))
	}, [posts, query])

	return (
		<div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
			{searchedPosts.length ? (
				searchedPosts.map(post => <PostItem key={post.id} {...post} />)
			) : (
				<h2>Response for {query} not founded</h2>
			)}
		</div>
	)
}
