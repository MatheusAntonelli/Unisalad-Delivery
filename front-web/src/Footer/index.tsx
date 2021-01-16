import './styles.css';
import {ReactComponent as FacebookIcon } from './facebook.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';


function Footer(){
    return( 
        <footer className = "main-footer">
             Sistema de delivery - UniSalad
             <div className = "footer-icons">
                 <a href="https://https://www.instagram.com/uni.salad/" target= "_new">
                    <InstagramIcon />
                 </a> 
                 <a href="https://www.linkedin.com/company/unisalad/" target= "_new">
                    <LinkedinIcon />
                 </a>
                 <a href="https://www.facebook.com/unisaladfoz" target= "_new">
                    <FacebookIcon />
                 </a>
            </div> 
        </footer>
    ) 
} 

export default Footer;