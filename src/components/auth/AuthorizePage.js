import { Navigate } from 'react-router-dom';
//import useAuth from '../../hooks/useAuth';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../store/features/auth/authSlice';

export default function AuthorizePage({ children }) {
	const auth = useSelector(selectAuth);

	if (!auth.key) {
		return <Navigate to='/auth' replace />;
	}
	return children;
}
