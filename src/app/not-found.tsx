import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<main className='w-full h-screen flex justify-center items-center'>
			<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
				<div className='mx-auto max-w-screen-sm text-center'>
					<h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl'>
						404
					</h1>
					<p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl'>
						Something&apos;s missing.
					</p>
					<p className='mb-4 text-lg font-light text-gray-500'>
						Sorry, we can&apos;t find that page. You&apos;ll find lots to
						explore on the home page.
					</p>
					<Button>
						<Link href={'/'}>Go to HomePage</Link>
					</Button>
				</div>
			</div>
		</main>
	)
}
