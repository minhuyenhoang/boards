export default function Login({
	isChecked,
	togglePrivacy,
	toggleReadPrivacy,
	handleChange,
	login,
	isDisabled,
}) {
	return (
		<div className='bg-white p-5 rounded-lg border-2 border-black w-1/2'>
			<h1 className='mb-5 text-2xl font-bold text-center'>
				Sync in your Trello! ✌️
			</h1>
			<form onSubmit={login} className='flex flex-col'>
				<p>
					You will need to sign in to your Trello account to get the API key.
					After you're logged in, retrieve the key{' '}
					<a className='underline' href='https://trello.com/app-key/'>
						here
					</a>
					.
				</p>
				<label htmlFor='key' className='mt-5'>
					API key
				</label>
				<input
					type='password'
					placeholder='Enter your API key...'
					id='key'
					onChange={handleChange}
					className='my-2 p-1 border-2 rounded-lg border-gray-200 focus:border-[#1f1c2e] focus:outline-none'
				/>
				<div className='mt-1'>
					<input
						type='checkbox'
						checked={isChecked}
						onChange={toggleReadPrivacy}
					/>
					<label className='ml-2'>
						I have read and acknowledge the{' '}
						<span className='underline cursor-pointer' onClick={togglePrivacy}>
							Privacy policy
						</span>
					</label>
				</div>
				<button
					disabled={isDisabled}
					className={`mt-5 p-3 rounded-lg ${
						isDisabled ? 'bg-gray-200 text-black' : 'bg-[#1f1c2e] text-white'
					}`}>
					Connect
				</button>
			</form>
		</div>
	);
}
