import { useEffect, useState } from 'react';
import Privacy from '../../components/auth/Privacy';
import Login from '../../components/auth/Login';

const RETURN_URL = 'http://localhost:3000';

export default function Auth() {
	const [showPrivacy, setShowPrivacy] = useState(false);
	const [key, setKey] = useState('');
	const [isChecked, setIsChecked] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);

	useEffect(() => {
		if (key !== '' && isChecked !== false) {
			setIsDisabled(false);
		}
	}, [key, isChecked]);

	const togglePrivacy = () => {
		setShowPrivacy(!showPrivacy);
	};

	const toggleReadPrivacy = () => {
		setIsChecked(!isChecked);
	};

	const handleChange = (e) => {
		setKey(e.target.value);
	};

	const login = (e) => {
		e.preventDefault();
		localStorage.setItem('key', key);
		window.location.replace(
			`https://trello.com/1/authorize?return_url=${RETURN_URL}&expiration=1hour&name=Boards&scope=read,write&response_type=token&key=f11979d5b368167d5021904f4febc9d2`
		);
	};

	return (
		<div className='flex h-screen w-screen items-center justify-center'>
			{showPrivacy ? (
				<Privacy togglePrivacy={togglePrivacy} />
			) : (
				<Login
					isChecked={isChecked}
					togglePrivacy={togglePrivacy}
					toggleReadPrivacy={toggleReadPrivacy}
					handleChange={handleChange}
					login={login}
					isDisabled={isDisabled}
				/>
			)}
		</div>
	);
}
