export default function Privacy({ togglePrivacy }) {
	return (
		<div className='bg-white p-5 rounded-lg border-2 border-black w-1/2'>
			<h1 className='mb-5 text-xl'>
				<span className='underline mb-5 font-bold mr-1'>Privacy Policy </span>🔒
			</h1>
			<p>
				Boards <span className='font-bold text-red-600'>🚫 DOES NOT 🚫</span>{' '}
				store your API key 🔑 or your token. Everytime you close{' '}
				<span className='inline-block align-middle'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
				</span>{' '}
				or switch{' '}
				<span className='inline-block align-middle'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
						/>
					</svg>
				</span>{' '}
				browser/tab and become inactive{' '}
				<span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
						className='feather feather-activity inline-block align-middle h-5 w-5'>
						<polyline points='22 12 18 12 15 21 9 3 6 12 2 12' />
					</svg>
				</span>{' '}
				for a long period of time, the application will automatically sign you
				out and delete both key and token. You will need to re-enter your key.{' '}
				<br />
				<br />
				We only store the ID of all your Trello boards. For more information,
				the ID could also be found on a Trello board's URL link.
			</p>
			<p className='cursor-pointer mt-5' onClick={togglePrivacy}>
				<span className='inline-block align-middle mr-1'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M7 16l-4-4m0 0l4-4m-4 4h18'
						/>
					</svg>
				</span>
				Back
			</p>
		</div>
	);
}
