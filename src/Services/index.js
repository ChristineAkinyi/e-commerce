import Support from '../Images/customersupport.png';
import Return from '../Images/return.png';
import payment from '../Images/payment.jpeg';
import Lorry from '../Images/delivery.png';
// import { Services } from '../Navbar';
import './index.css';

export function Categories(){
    return(
        <div>
            <h2 className='categries'>Categories</h2>
        </div>
    )
}Categories();


export function Services(){
return (
    <div >
        <div className='midfooter'>
    <div>
        <img src={Lorry} alt='' className='lorry'/>
        <h4>FREE DELIVERY</h4>
        <p>UK Orders Only</p>
    </div>
    
    <div>
        <img src={Support} alt='' className='support'/>
        <h4>7/24 SUPPORT</h4>
        <p>Dedicated Support</p>
    </div>
    
    <div>
    <img src={Return} alt='' className='return'/>
    <h4>EASY AND FAST RETURN</h4>
    <p>Shop with Confidence</p>
    </div>
    
    <div>
    <img src={payment} alt='' className='payment'/>
    <h4>SECURE PAYMENT</h4>
    <p>100% Secure Payment</p>
    </div>
    </div>
    
    <Categories/>
    </div>

)
  

}