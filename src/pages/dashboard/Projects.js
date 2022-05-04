import Column from '../../components/Column';

export default function Projects({ data }) {
	return (
		<div className='grow flex flex-col space-y-5'>
			<h1>List Name</h1>
			<div className='flex flex-nowrap space-x-5'>
				<Column />
				<Column />
			</div>
		</div>
	);
}
