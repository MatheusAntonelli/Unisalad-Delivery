import './styles.css';
import { ReactComponent as Logo} from './delivery.svg';

function Navbar(){
    return(
        <nav className = "main-navbar">
            <Logo/>
            <a href="home" className='logo-text'>UniSalad</a>
        </nav>
    )
}

export default Navbar;