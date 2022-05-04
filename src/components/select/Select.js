import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import EditableBlock from './EditableBlock';
import OutsideClickHandler from 'react-outside-click-handler';

export default function Select({ title }) {
	const [lists, setLists] = useState(['1', '2', '3']);
	const [list, setList] = useState();
	const [show, setShow] = useState(false);
	const [focus, setFocus] = useState(false);

	/*useEffect(() => {
		const main = document.getElementsByClassName('main');
		main.addEventListener('click', onClick);
	}, []);*/

	const onEnter = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
		}
	};

	const onClick = (e) => {
		e.preventDefault();
		setShow(!show);
		setFocus(true);
	};

	const onOutsideClick = () => {
		setShow(false);
		setFocus(false);
	};

	const addList = (value) => {
		setList(value);

		setLists((lists) => [...lists, value]);
	};

	const selectList = (value) => {
		setList(value);
	};

	return (
		<div className='flex-none w-36 relative'>
			<OutsideClickHandler onOutsideClick={onOutsideClick}>
				{lists.length !== 0 ? (
					<EditableBlock
						hasLists={true}
						addList={addList}
						value={list !== undefined ? list : lists[0]}
						show={onClick}
						dropdown={show}
						focus={focus}
					/>
				) : (
					<EditableBlock
						hasLists={false}
						addList={addList}
						value='Add a list'
					/>
				)}
				<Dropdown show={show} lists={lists} selectList={selectList} />
			</OutsideClickHandler>
		</div>
	);
}
