import { useState } from 'react';

export default function EditableBlock({
	hasLists,
	addList,
	show,
	isOption,
	value,
	dropdown,
	focus,
}) {
	// https://stackoverflow.com/questions/1125292/how-to-move-cursor-to-end-of-contenteditable-entity
	// Solution by Nico Burns
	const setEndOfContenteditable = (contentEditableElement) => {
		var range, selection;
		if (document.createRange) {
			//Firefox, Chrome, Opera, Safari, IE 9+
			range = document.createRange(); //Create a range (a range is a like the selection but invisible)
			range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
			range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
			selection = window.getSelection(); //get the selection object (allows you to change selection)
			selection.removeAllRanges(); //remove any selections already made
			selection.addRange(range); //make the range you have just created the visible selection
		} else if (document.selection) {
			//IE 8 and lower
			range = document.body.createTextRange(); //Create a range (a range is a like the selection but invisible)
			range.moveToElementText(contentEditableElement); //Select the entire contents of the element with the range
			range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
			range.select(); //Select the range (make it the visible selection
		}
	};

	// 13 is for Enter, 36 is for Return (MacBook)
	const onKeyDown = (e) => {
		if (e.keyCode === 13 || e.keyCode === 36) {
			e.preventDefault();
			if (e.target.innerText === '') {
				e.target.innerText = 'Add a list';
			} else {
				// only add the list if it's an option in the dropdown
				if (isOption || hasLists === false) addList(e.target.innerText);
				// if not, then call the API and update the list's name
			}
			setEndOfContenteditable(e.target);
		}
	};

	return (
		<p
			className={`${focus ? 'bg-white' : ''} focus:outline-none ${
				isOption ? 'border-t border-gray-100 px-3 py-3' : 'px-3 py-2'
			} ${
				hasLists
					? 'rounded-t-md'
					: 'focus:border-black rounded-md border-2 border-transparent'
			} ${dropdown ? '' : 'rounded-b-md'}`}
			contentEditable
			suppressContentEditableWarning={true}
			onKeyDown={onKeyDown}
			onClick={show}>
			{value}
		</p>
	);
}
