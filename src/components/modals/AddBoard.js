import Modal from './index';

export default function AddBoard({ open, onClose }) {
	return (
		<Modal open={open} onClose={() => onClose(false)}>
			<h1>Add a new board</h1>
			<input type='text' placeholder='Type something....' />
		</Modal>
	);
}
