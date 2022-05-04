import { useState } from 'react';
import AddBoard from '../components/modals/AddBoard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Layout({ children }) {
	const [openAddboard, setOpenAddboard] = useState(false);

	const toggleModalAddboard = (value) => {
		setOpenAddboard(value);
	};

	return (
		<>
			<div className='flex h-screen w-full fixed'>
				<Sidebar />
				<div className='w-full bg-[#f3f6fd]'>
					<Navbar toggleModal={toggleModalAddboard} />
					<main className='overflow-y-scroll p-5'>{children}</main>
				</div>
				<AddBoard open={openAddboard} onClose={toggleModalAddboard} />
			</div>
		</>
	);
}
