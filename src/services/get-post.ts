import { notFound } from 'next/navigation'
import type { IPost } from './types'

export const getPost = async (id: number) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/${id}`,
		{
			next: { revalidate: 3600, tags: ['post'] },
		}
	)

	if (!res.ok) {
		if (res.status == 404) {
			notFound()
		}
		throw {
			status: res.status,
			message: res.statusText,
		}
	}

	return (await res.json()) as IPost
}
