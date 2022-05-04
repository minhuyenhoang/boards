import Card from '../components/Card';
export default function Column() {
	return (
		<div className='flex flex-col space-y-5'>
			<div className='bg-white rounded-md flex p-3 justify-between'>
				<p className='font-bold'>Backlog</p>
				<div className='flex items-center space-x-3'>
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
							d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
						/>
					</svg>
					<button className='p-1 rounded-md bg-black'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5 text-white'
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
					</button>
				</div>
			</div>
			<div className='space-y-3'>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}
