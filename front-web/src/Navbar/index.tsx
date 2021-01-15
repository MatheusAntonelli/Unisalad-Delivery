import './styles.css';
import { ReactComponent as Logo} from './unilogo.svg';

function Navbar(){
    return( 
        <nav className = "main-navbar">
            <a href="home" className='logo-text'><Logo/></a>
        </nav>
    )
}

export default Navbar;