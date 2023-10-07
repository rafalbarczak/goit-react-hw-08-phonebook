import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (<nav>
        <Link to='/'>Home</Link>
         {isLoggedIn && <Link to="/contacts">Contacts</Link>}{' '}
        </nav>)
}