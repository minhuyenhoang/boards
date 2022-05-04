import SearchBar from './SearchBar';

export default function Navbar({ toggleModal }) {
	return (
		<div className='flex items-center justify-between p-2 w-full mt-1'>
			<div className='flex items-center space-x-5'>
				<span>Multiboards</span>
				<SearchBar />
			</div>
			<div className='flex items-center space-x-3'>
				<button className='btn-action flex' onClick={() => toggleModal(true)}>
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
							d='M12 6v6m0 0v6m0-6h6m-6 0H6'
						/>
					</svg>
					<p>Add new board</p>
				</button>
				<button className='btn-action'>
					<svg
						className='moon'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						width='24'
						height='24'
						viewBox='0 0 24 24'>
						<defs></defs>
						<path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'></path>
					</svg>
				</button>
				<button className='btn-action'>
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
							d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
