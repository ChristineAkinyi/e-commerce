import { FaCcVisa, FaInstagram, FaPaypal, FaTwitter, FaCcMastercard } from 'react-icons/fa';
import './index.css';

export function Footer (){
    return(
        <div className='footer-content'>
            <footer>
                <h3>Corporate</h3>
                <li>Shipping & Returns</li>
                <li>About Us</li>
                <li>Gift Card</li>
                <li>Data Preferences</li>
            </footer>

            <footer>
                <h3>Support</h3>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>Submit a Return</li>
            </footer>

            <footer>
            <p>Language | Currency</p>
            <FaInstagram/>
            <FaTwitter/>
            </footer>

            <footer>
                <FaPaypal/>
                <FaCcMastercard/>
                <FaCcVisa/>
            </footer>
            
        </div>
    )
}