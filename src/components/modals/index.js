import { Fragment, useEffect, useRef } from 'react';
import Portal from '../Portal';

export default function Modal(props) {
	const { open, onClose, locked } = props;
	const backdrop = useRef(null);

	useEffect(() => {
		const { current } = backdrop;

		const keyHandler = (e) =>
			!locked && [27].indexOf(e.which) >= 0 && onClose();

		const clickHandler = (e) => !locked && e.target === current && onClose();

		if (current) {
			current.addEventListener('click', clickHandler);
			window.addEventListener('keyup', keyHandler);
		}

		if (open) {
			window.setTimeout(() => {
				document.activeElement.blur();
				document.querySelector('#root').setAttribute('inert', 'true');
			}, 10);
		}

		return () => {
			if (current) {
				current.removeEventListener('click', clickHandler);
			}

			document.querySelector('#root').removeAttribute('inert');
			window.removeEventListener('keyup', keyHandler);
		};
	}, [open, locked, onClose]);

	return (
		<Fragment>
			{open && (
				<Portal className='modal-portal'>
					<div
						ref={backdrop}
						className={open ? 'backdrop backdrop-active' : ''}>
						<div className='modal-content bg-white p-3 rounded-lg'>
							{props.children}
						</div>
					</div>
				</Portal>
			)}
		</Fragment>
	);
}
