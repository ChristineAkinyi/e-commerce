import './index.css';
import {FaHeart, FaSearch, FaShoppingBag, FaUser} from 'react-icons/fa';






function Navbar(){
    return(
        <div>
            <div className="navigation">

                <nav className='navmenu'>
                <li>SHOP</li>
                <li>LOOKBOOK</li>
                <li>BLOG</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                </nav>
                

                <div id='icons'> 
                <FaSearch/>
                <FaUser/>
                <FaHeart/>
                <FaShoppingBag/>
                </div>

                </div>

                <div className='container'>

                <img src={""} alt='' className='model'></img>

                    <h3>DISCOVER LATEST TREND</h3>
                    <h1>AUTUMN COLLECTION, 2023</h1>
                    <button>Shop Now</button>

                   

                </div>
          
        </div>
    )
}

export default Navbar;