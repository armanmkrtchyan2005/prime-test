import { IPost } from './types'

export const getPosts = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`, {
		next: { revalidate: 60 },
	})

	return (await res.json()) as IPost[]
}
