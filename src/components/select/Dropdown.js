import { useEffect } from 'react';
import EditableBlock from './EditableBlock';

export default function Dropdown({ show, lists, selectList }) {
	const handleSelect = (e) => {
		e.preventDefault();
		selectList(e.target.innerText);
	};
	let data = [];
	if (lists.length > 1) data = [...lists, 'Add a list'];
	else if (lists.length === 1) data = ['Add a list'];

	const render = data.map((e, index) => {
		if (index === data.length - 1)
			return (
				<EditableBlock key={index} isOption={true} hasLists={true} value={e} />
			);
		else
			return (
				<p
					className={`px-3 py-3 cursor-pointer ${
						index === 0 ? 'border-t border-gray-200' : ''
					}`}
					key={index}
					onClick={handleSelect}>
					{e}
				</p>
			);
	});

	return (
		<div
			className={`z-20 fixed top-30 w-36 ${
				show
					? 'flex flex-col bg-white rounded-b-md divide-y-[1px]'
					: 'invisible'
			}`}>
			{render}
		</div>
	);
}
