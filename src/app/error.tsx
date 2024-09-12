'use client'

import { Button } from '@/components/ui/button'

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	return (
		<main className='w-full h-screen flex justify-center items-center'>
			<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
				<div className='mx-auto max-w-screen-sm text-center'>
					<p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl'>
						{error.message}
					</p>
					<Button onClick={reset}>Go to Home Page</Button>
				</div>
			</div>
		</main>
	)
}
