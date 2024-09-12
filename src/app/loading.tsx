export default function Loading() {
	return (
		<div className='fixed w-full flex justify-center items-center h-screen bg-white z-50'>
			<div className='relative inline-flex'>
				<div className='w-8 h-8 bg-gray-500 rounded-full'></div>
				<div className='w-8 h-8 bg-gray-500 rounded-full absolute top-0 left-0 animate-ping'></div>
				<div className='w-8 h-8 bg-gray-500 rounded-full absolute top-0 left-0 animate-pulse'></div>
			</div>
		</div>
	)
}
