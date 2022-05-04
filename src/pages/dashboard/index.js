import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import history from 'history/browser';
import AddBoard from '../../components/modals/AddBoard';
import Projects from './Projects';
import Sidebar from './Sidebar';
import NewList from './NewList';
import Select from '../../components/select/Select';
import { selectAuth, saveToken } from '../../store/features/auth/authSlice';

const BASE_URL = 'https://api.trello.com/1';
const fragment = history.location.hash;
const token = fragment.substring(7);
localStorage.setItem('token', token);
//const key = 'f11979d5b368167d5021904f4febc9d2';

if (token !== null && token !== undefined && token !== '') history.replace('/');

export default function Dashboad() {
	const [data, setData] = useState([]);
	const dispatch = useDispatch();
	const key = useSelector(selectAuth);

	const transformData = (id, name, res) => {
		let boardList = [];
		for (let i = 0; i < res.length; i++) {
			boardList.push({ id: res[i].id, name: res[i].name });
		}
		setData((data) => [...data, { id: id, name: name, lists: boardList }]);
	};

	useEffect(() => {
		const expirationTime = new Date(
			new Date().getTime() + 1000 * 60 * 60
		).toString();
		dispatch(saveToken({ token: token, expirationTime: expirationTime }));
		//auth.saveUser('token', token);
		/*fetch(BASE_URL + `/members/me/boards?key=${key}&token=${token}`)
			.then((res) => res.json())
			.then((info) => {
				for (let i = 0; i < info.length; i++) {
					let boardId = info[i].id;
					let boardName = info[i].name;
					fetch(BASE_URL + `/boards/${boardId}/lists?key=${key}&token=${token}`)
						.then((res) => res.json())
						.then((lists) => transformData(boardId, boardName, lists));
				}
			});*/
	}, []);

	return (
		<div className='flex flex-col w-full'>
			<Select />
			<NewList />
			{/*<Projects data={data} />*/}
		</div>
	);
}
