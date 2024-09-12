'use client'

import { TextField } from '@/components/ui/text-field'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEventHandler, FC } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { useDebouncedCallback } from 'use-debounce'

export interface SearchProps {}

export const Search: FC<SearchProps> = () => {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	const handleInputChange = useDebouncedCallback<
		ChangeEventHandler<HTMLInputElement>
	>(e => {
		const value = e.target.value

		const params = new URLSearchParams(searchParams)

		if (value) {
			params.set('q', value)
		} else {
			params.delete('q')
		}
		replace(`${pathname}?${params.toString()}`)
	}, 300)

	return (
		<form className='mt-5' onSubmit={e => e.preventDefault()}>
			<label
				htmlFor='search'
				className='mb-2 text-sm font-medium text-gray-900 sr-only'
			>
				Search
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
					<IoIosSearch size={20} />
				</div>
				<TextField
					type='text'
					placeholder='Search'
					className='ps-10'
					onChange={handleInputChange}
					defaultValue={searchParams.get('query') || ''}
				/>
				{/* <Button className='absolute end-2.5 bottom-2.5'>Search</Button> */}
			</div>
		</form>
	)
}
