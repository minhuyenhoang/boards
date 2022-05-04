export default function SearchBar() {
	return (
		<div className='p-2 rounded-full shadow-md bg-white flex justify-between'>
			<input
				type='text'
				placeholder='Search...'
				className='pl-2 focus:outline-none'
			/>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth={2}>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
				/>
			</svg>
		</div>
	);
}
